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

export const findEstablishmentByIdController = async(req, res, next) => {
    try{
        const {id} = req.params
        const establishment = await service.findOne(id);
        const { password, ...establishmentWithoutPassword } = establishment.toJSON();
        return res.status(200).json(establishmentWithoutPassword)
    } catch (error) {
        next(error);
    }
}

export const updateEstablishmentController = async(req, res, next)=>{
    try{
        const {id} = req.params
        const body = req.body;
        const updatedEstablishment = await service.update(id,body)

        const { password, createdAt, ...establishmentWithoutPassword } = updatedEstablishment.toJSON()

        return res.status(200).json({
            message:'Establecimiento actualizado exitosamente',
            establishment: establishmentWithoutPassword
        })
    }catch (error) {
        next(error);
    }
}

export const deleteEstablishmentController = async(req, res, next)=>{
    try{
        const {id} = req.params
        const updatedEstablishment = await service.delete(id)

        return res.status(200).json({
            message:'Establecimiento eliminado exitosamente',
        })
    }catch (error) {
        next(error);
    }
}