import StudentsService from "../services/student.service.js";

const service = new StudentsService()

export const createStudentController = async (req, res, next) => {
    try{
        const body = req.body;
        const newStudent = await service.createStudent(body)

        return res.status(201).json({
            message:'Estudiante creado exitosamente',
            newStudent: newStudent
        })
    }catch (error) {
        next(error);
    }
}

export const findAllStudentsController = async (req, res, next) => {
    try{
        const students = await service.find();
        return res.status(200).json({students})
    }catch (error) {
        next(error);
    }
}

export const findStudentByQRController = async (req, res, next) => {
    try{
        const {id} = req.params
        const student = await service.findStudentByQrCode(id);
        return res.status(200).json(student)
    }catch (error) {
        next(error);
    }
}