import express from 'express';
import tokenHandler from '../middlewares/token.handler.js';
import {createScanController, findAllScansByEstablishmentController, findAllScansByStudentController, findAllScansController} from '../controllers/scan.controller.js'
import roleHandler from '../middlewares/role.handler.js';

const router = express.Router();

router.post('/',
    tokenHandler,
    createScanController
);

router.get('/',
    tokenHandler,
    findAllScansController
)

router.get('/establishment/:id',
    tokenHandler,
    findAllScansByEstablishmentController
)

router.get('/student/:id',
    tokenHandler,
    roleHandler,
    findAllScansByStudentController
)


export default router