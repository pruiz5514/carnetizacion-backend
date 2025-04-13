import express from 'express';
import authRouter from './auth.router.js'
import establishmentRouter from './establishment.router.js'

export function routerApi(app){
    const router = express.Router()
    app.use('/api/v1', router);
    router.use('/auth', authRouter)
    router.use('/establishment', establishmentRouter)
}