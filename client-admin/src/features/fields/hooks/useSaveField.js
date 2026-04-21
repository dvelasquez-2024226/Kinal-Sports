import { useFieldsStore } from "../../users/store/adminStore";

export const useSaveField = () => {
    const createField = useFieldsStore((state) => state.createField);

    const saveField = async (data) =>{
        const fromData = new FromData();

        fromData.append("fieldName", data.fieldName);
        fromData.append("fieldType", data.fieldType);
        fromData.append("capacity", data.capacity);
        fromData.append("pricePerHour", data.pricePerHour);
        fromData.append("description", data.description);

        if(data.photo?.length > 0){
            fromData.append("image", data.photo[0]);
        }

        await createField(fromData);
    }

    return { saveField }
}