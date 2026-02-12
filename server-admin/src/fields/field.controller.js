import { createFieldRecord } from "./field.service";

export const createField = async (req, res) => {
    try{
        const field = await createFieldRecord({
            fieldData: req.body, 
            file: req.file
        });
        res.status(201).json({
            success: true,
            message: `Cancha creada exitosamente`,
            data: field
        });
    }catch(err){
        res.status(400).json({
            success: false,
            message: `Error al crear la cancha`,
            error: err.message
        })
    }
}