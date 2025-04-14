import Joi from "joi";

export const scanSchema = Joi.object({
    studen_id: Joi.string().required(),
    establishment_id: Joi.string().required(),
    scanned_at: Joi.date().required(),
    discount_applied: Joi.boolean().required()
})