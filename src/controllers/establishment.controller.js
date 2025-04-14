import EstablishmentsService from "../services/establishment.service.js";

const service = new EstablishmentsService()

export const createEstablishmentController = async(req, res, next)=>{
    try{
        const body = req.body;
        const newEstablishment = await service.create(body)
        const { password, ...establishmentWithoutPassword } = newEstablishment.toJSON();

        return res.status(201).json({
            message:'Establecimiento creado exitosamente',
            establishment: establishmentWithoutPassword
        })
    }catch (error) {
        next(error);
    }
}

export const findAllEstablishmentsController = async(req, res, next)=>{
    try{
        const establishments = await service.findAll();
        return res.status(200).json(establishments)
    } catch (error) {
        next(error);
    }
}