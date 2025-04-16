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
        return res.status(200).json(students)
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

export const deleteStudentController = async(req, res, next)=>{
    try{
        const {id} = req.params
        await service.delete(id)
        return res.status(200).json({
            message:'Estudiante eliminado exitosamente',
        })
    }catch (error) {
        next(error);
    }
}

export const updateStudentController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedStudent = await service.updateStudent(id, updates);

        return res.status(200).json({
            message: 'Estudiante actualizado correctamente',
            updatedStudent
        });
    } catch (error) {
        next(error);
    }
};

export const findStudentByIdController = async(req, res, next) => {
    try{
        const {id} = req.params
        const student = await service.findOne(id);
        return res.status(200).json(student)
    } catch (error) {
        next(error);
    }
}