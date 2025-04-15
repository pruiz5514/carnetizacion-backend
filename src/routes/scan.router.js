import express from 'express';
import tokenHandler from '../middlewares/token.handler.js';
import {createScanController, findAllScansByEstablishmentController, findAllScansController} from '../controllers/scan.controller.js'

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

export default router