import { Establishments } from "../database/models/establishments.model.js";
import { Scans } from "../database/models/scans.model.js";
import { Students } from "../database/models/students.model.js";
import BaseService from "./base.service.js";

class ScanService extends BaseService{
    constructor(){
        super(Scans)
    }
    

    async create (data){
        const existingStudent = await Students.findByPk(data.student_id);

        if (!existingStudent) {
            throw new Error('El estudiante no esta registrado');
        }

        const existingEstablishment = await Establishments.findByPk(data.establishment_id);

        if (!existingEstablishment) {
            throw new Error('El establecimiento no esta registrado');
        }

        const scanInfo = {
            ...data,
            scanned_at: new Date()
        }

        return super.create(scanInfo)
    }

    async findAll(){
        const scans = await this.model.findAll({
            include:[
                {
                    model: Students,
                    attributes: ['fullname']
                },
                {
                    model: Establishments,
                    attributes: ['establishment_name']
                }

            ]
        })

        return scans.map(scan => ({
            id: scan.id,
            student: scan.student?.fullname,
            establishment: scan.establishment?.establishment_name,
            scanned_at: scan.scanned_at,
            discount_applied: scan.discount_applied,
          }));
    }

    async findByEstablishment(id){
        const scans = await this.model.findAll({
            where: {establishment_id: id},
            attributes: { exclude: ['student_id'] },
            include: {
                model: Students,
                attribute: "student_id",
                as: 'student',
            }
        })
        return scans
    }

    async findByStudent(id){
        const scans = await this.model.findAll({
            where: {student_id: id},
            attributes: { exclude: ['establishment_id'] },
            include: [
                {
                    model: Establishments,
                    attributes: { exclude: ['password', 'id', 'role_id']},
                    as: 'establishment',
                },
                {
                    model: Students,
                    as: 'student',
                    attributes: ['fullname']  
                }
            ]
        })
        return scans
    }
} 


export default ScanService