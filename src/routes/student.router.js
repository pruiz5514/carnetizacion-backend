import express from 'express';
import { studentsSchema } from '../schemas/students.schema.js';
import { createStudentController, findAllStudentsController, findStudentByQRController } from '../controllers/student.controller.js';
import tokenHandler from '../middlewares/token.handler.js';
import validatorHandler from '../middlewares/validator.handler.js';
import roleHandler from '../middlewares/role.handler.js';

const router = express.Router();

router.post('/', 
    validatorHandler(studentsSchema),
    tokenHandler,
    roleHandler,
    createStudentController
)

router.get('/',
    tokenHandler, 
    roleHandler,
    findAllStudentsController
)

router.get('/:id',
    tokenHandler,
    findStudentByQRController
)

export default router