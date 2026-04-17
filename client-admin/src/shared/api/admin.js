import { axiosAdmin } from "./api";

export const getFields = async () => {
    return await axiosAdmin.get("/fields");
}