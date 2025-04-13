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
        await this.checkIfExist('establishment_name', data.establishment_name, 'El establecimiento ya está registrado');

        data.password = await bcrypt.hash(data.password, 10)

        return super.create(data);
    }

    async findAll(){
        const establishments = await this.model.findAll({
            attributes: { exclude: ['password'] }
        });

        return establishments
    }    

    
}

export default EstablishmentsService