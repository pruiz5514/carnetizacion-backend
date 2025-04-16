import { Students } from "../database/models/students.model.js";
import BaseService from "./base.service.js";

class StudentsService extends BaseService{
    constructor(){
        super(Students)
    }

    async createStudent(data){
        await this.checkIfExist('email', data.email, 'El correo electronico ya está registrado');
        await this.checkIfExist('qr_code', data.qr_code, 'El codigo ya está registrado');

        return super.create(data)
    }
    async findStudentByQrCode(id){
        const student = await this.model.findOne({ where: { qr_code: id } });
        if (!student) {
            throw new Error(`No se encontró ningún estudiante con ${attribute}: ${value}`);
        }
        return student; 
    }

    async updateStudent(id, data) {
        const student = await this.findOne(id); 
    
        if (!student) {
            throw new Error('Estudiante no encontrado');
        }
    
        if (data.email && data.email !== student.email) {
            await this.checkIfExist('email', data.email, 'El correo electrónico ya está registrado');
        }
    
        if (data.qr_code && data.qr_code !== student.qr_code) {
            await this.checkIfExist('qr_code', data.qr_code, 'El código ya está registrado');
        }
    
        await super.update(id, data)
    
        return student;
    }
}

export default StudentsService