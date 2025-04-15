import express from 'express';
import validatorHandler from '../middlewares/validator.handler.js';
import { establishmentSchema, establishmentUpdateSchema } from '../schemas/establishment.schema.js';
import tokenHandler from '../middlewares/token.handler.js';
import roleHandler from '../middlewares/role.handler.js';
import { createEstablishmentController, deleteEstablishmentController, findAllEstablishmentsController, findEstablishmentByIdController, updateEstablishmentController } from '../controllers/establishment.controller.js';

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

router.get('/:id',
    tokenHandler,
    roleHandler,
    findEstablishmentByIdController
)

router.put('/:id',
    validatorHandler(establishmentUpdateSchema),
    tokenHandler,
    roleHandler,
    updateEstablishmentController
)

router.delete('/:id',
    validatorHandler(establishmentUpdateSchema),
    tokenHandler,
    roleHandler,
    deleteEstablishmentController
)

export default router