import { create } from "zustand";
import { 
    createField as createFieldRequest, getFields as getFieldsRequest 
} from "../../../shared/api"

export const useFieldsStore = create((set, get) => ({
    fields: [],
    loading: false,
    error: null,

    getFields: async () =>{
        try{
            set({loading: true, error: null})
            const response = await getFieldsRequest();

            set({fields: response.data.data, loading: false })
        }catch (err){
            set({
                error: err.response?.data?.message || "Error al obtener los campos",
                loading: false
            })
        }
    },

    createField: async (fromData) => {
        try{
            set({loading: true, error: null});
            const response = await createFieldRequest(fromData);

            set({
                fields: [response.data.data, ...get().fields],
                loading: false
            })
        }catch(err){
            set({
                error: err.response?.data?.message || "Error al crear las cancha",
                loading: false
            })
        }
    }
}))