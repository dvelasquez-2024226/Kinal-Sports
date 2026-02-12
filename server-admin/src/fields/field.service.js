import Field from './field.model.js';
import { cloudinary } from '../../middlewares/file-uploaders.js';

export const createFieldRecord = async ({fieldData, file}) => {
    const data = {...fieldData};

    if(file){
        const extension = file.path.split('.').pop();
        const filename = file.filename;
        const relativePath = filename.substring(filename.indexOf('fields/'));
        data.photo = `${relativePath}.${extension}`;
    }else{
        data.photo = 'fields/kinal_sports_zqkmek';
    }

    const field = new Field(data);
    await field.save();
    return field;
}