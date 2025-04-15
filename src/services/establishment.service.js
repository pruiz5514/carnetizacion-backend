import { Op } from "sequelize";
import { Establishments } from "../database/models/establishments.model.js";
import BaseService from "./base.service.js";
import bcrypt from 'bcrypt'

class EstablishmentsService extends BaseService{
    constructor(){
        super(Establishments)
    }

    async create(data){
        await this.checkIfExist('phone_number', data.phone_number, 'El número de teléfono ya está registrado');
        await this.checkIfExist('email', data.email, 'El correo electronico ya está registrado');
        if(data.role_id === 2){
            await this.checkIfExist('establishment_name', data.establishment_name, 'El establecimiento ya está registrado');
        }

        data.password = await bcrypt.hash(data.password, 10)

        return super.create(data);
    }

    async findAll(){
        const establishments = await this.model.findAll({
            where: {role_id: 2},
            attributes: { exclude: ['password'] }
        });

        return establishments
    }  
    
    async checkIfExistUpdate(field, value, message, id) {
        const where = {
            [field]: value,
            id: { [Op.ne]: id } 
        };

        const existing = await this.model.findOne({ where });

        if (existing) {
            throw new Error(message);
        }
    }

    async update(id,data) {
    
        const {password, role_id, ...rest } = data;
      
        await this.checkIfExistUpdate('phone_number', data.phone_number, 'El número de teléfono ya está registrado');
        await this.checkIfExistUpdate('email', data.email, 'El correo electrónico ya está registrado');
      
        if (role_id === 2) {
          await this.checkIfExistUpdate('establishment_name', data.establishment_name, 'El establecimiento ya está registrado');
        }
      
        return super.update(id, rest);
      }
}

export default EstablishmentsService