import express from 'express';
import validatorHandler from '../middlewares/validator.handler.js';
import { establishmentSchema } from '../schemas/establishment.schema.js';
import tokenHandler from '../middlewares/token.handler.js';
import roleHandler from '../middlewares/role.handler.js';
import { createEstablishmentController, findAllEstablishmentsController } from '../controllers/establishment.controller.js';

const router = express.Router();

router.post('/',
    validatorHandler(establishmentSchema),
    tokenHandler,
    roleHandler,
    createEstablishmentController
)

router.get('/',
    tokenHandler,
    roleHandler,
    findAllEstablishmentsController
)

export default router