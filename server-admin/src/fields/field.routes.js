import { Router } from 'express';
import { createField } from './field.controller';
import { validateCreateField } from '../../middlewares/field-validators.js';
import { upLoadFieldImage } from '../../middlewares/file-uploaders';
import { cleanupUploadedFileOnFinish } from '../../middlewares/delete-file-on-error.js';