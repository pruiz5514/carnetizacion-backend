import Joi from "joi";

export const studentsSchema = Joi.object({
    fullname: Joi.string().required().min(3),
    email: Joi.string().email().required(),
    qr_code:Joi.string().required().min(4),
    active: Joi.boolean().required()
})