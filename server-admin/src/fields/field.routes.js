import { Router } from 'express';
import { createField, getFields } from './field.controller.js';
import { validateCreateField } from '../../middlewares/field-validators.js';
import { uploadFieldImage } from '../../middlewares/file-uploader.js';
import { cleanupUploadedFileOnFinish } from '../../middlewares/delete-file-on-error.js';


const router = Router();

router.get('/', getFields);

router.post(
    '/',
    uploadFieldImage.single('image'),
    cleanupUploadedFileOnFinish,
    validateCreateField,
    createField
);

export default router;