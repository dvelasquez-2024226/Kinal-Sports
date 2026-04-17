import { create } from "zustand";
import { getFields } from "../../../shared/api"

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
    }
}))