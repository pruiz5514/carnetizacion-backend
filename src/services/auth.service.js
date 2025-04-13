import { Establishments } from "../database/models/establishments.model.js";
import { Roles } from "../database/models/roles.model.js";
import BaseService from "./base.service.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class AuthService extends BaseService{
    constructor(){
        super(Establishments)
    }

    async login(data){
        const user  = await this.model.findOne({
            where: {email: data.email},
            include:{
                model: Roles,
                attribute: ["name"]
            }
        });
        if(!user){
            throw { status: 401, message: 'Credenciales invalidas' };
       }

       const validPassword = await bcrypt.compare(data.password, user.password)
        if(!validPassword){
             throw { status: 401, message: 'Credenciales invalidas' };
        }

        const token = jwt.sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60 * 2, 
              id: user.id,
              role_id: user.role.id
            }, process.env.JWT_KEY);
        
        return {user, token}    
    }
}

export default AuthService