import express from 'express';
import authRouter from './auth.router.js'
import establishmentRouter from './establishment.router.js'
import studentRouter from './student.router.js'
import scanRouter from './scan.router.js'

export function routerApi(app){
    const router = express.Router()
    app.use('/api/v1', router);
    router.use('/auth', authRouter)
    router.use('/establishment', establishmentRouter);
    router.use('/student', studentRouter);
    router.use('/scan', scanRouter)
}