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
}

export default StudentsService