import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

export const Students = sequelize.define('students', {
    id:{
        primaryKey: true,
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4
    },
    fullname:{
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate:{
            isEmail: true
        },
        unique: true
    },
    qr_code: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    active:{
        allowNull: false,
        type: DataTypes.BOOLEAN,
    }
},{
    timestamps: true,
    updatedAt: false 
})