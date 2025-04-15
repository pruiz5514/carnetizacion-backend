import Joi from "joi";

export const establishmentSchema = Joi.object({
    fullname: Joi.string().required().min(3),
    phone_number: Joi.number().integer().required().min(100000000).max(999999999),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role_id: Joi.number().integer().required().min(1).max(2),
    establishment_name: Joi.string().min(3)
        .when('role_id',{
            is: Joi.valid(2),
            then:Joi.required(),
            otherwise: Joi.optional()
        }),
    establishment_address: Joi.string().min(3)
        .when('role_id',{
            is: Joi.valid(2),
            then:Joi.required(),
            otherwise: Joi.optional()
        }),
})

export const establishmentUpdateSchema = Joi.object({
    fullname: Joi.string().required().min(3),
    phone_number: Joi.number().integer().required().min(100000000).max(999999999),
    email: Joi.string().email().required(),
    establishment_name: Joi.string().min(3).required(),
    establishment_address: Joi.string().min(3).required(),
})

