import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";
import { Roles } from "./roles.model.js";

export const Establishments = sequelize.define('establishments', {
    id:{
        primaryKey: true,
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4
    },
    fullname: {
        allowNull: false,
        type: DataTypes.STRING
    },
    phone_number:{
        allowNull:false,
        type: DataTypes.INTEGER
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate:{
            isEmail: true
        },
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    role_id:{
        allowNull: false,
        type:DataTypes.INTEGER,
        references: {
            model: Roles,
            key:'id'
        }
    },
    establishment_name:{
        allowNull: true,
        type: DataTypes.STRING,
        unique: true
    },
    establishment_address:{
        allowNull: true,
        type: DataTypes.STRING,
    }
},{
    timestamps: true,
    updatedAt: false 
})