import ScanService from "../services/scans.service.js";

const service = new ScanService();

export const createScanController = async(req, res, next)=>{
    try{
        const body = req.body
        const newScan = await service.create(body)
        return res.status(201).json({
            message:'Descuento aplicado exitosamente',
            newScan: newScan
        }) 
    }catch (error) {
        next(error);
    }
}

export const findAllScansController = async(req, res, next) => {
    try{
        const scans = await service.findAll();
        return res.status(200).json(scans)
    }catch (error) {
        next(error);
    }
}

export const findAllScansByEstablishmentController = async(req, res, next) =>{
    try{
        const {id} = req.params
        const scans = await service.findByEstablishment(id);
        return res.status(200).json(scans)
    }catch (error) {
        next(error);
    }
}

export const findAllScansByStudentController = async(req, res, next) =>{
    try{
        const {id} = req.params
        const scans = await service.findByStudent(id);
        return res.status(200).json(scans)
    }catch (error) {
        next(error);
    }
}