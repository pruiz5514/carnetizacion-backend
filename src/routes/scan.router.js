import express from 'express';
import tokenHandler from '../middlewares/token.handler.js';
import roleHandler from '../middlewares/role.handler.js';
import {createScanController, findAllScansController} from '../controllers/scan.controller.js'

const router = express.Router();

router.post('/',
    tokenHandler,
    createScanController
);

router.get('/',
    tokenHandler,
    findAllScansController
)

export default router