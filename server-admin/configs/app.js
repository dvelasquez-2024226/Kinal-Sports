'use strict'

import express, { application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const middlewares = (app) =>{
    app.use(express.urlencoded({extended: false, limit: '10mb'}));
    app.use(express.json({limit: '10mb'}));
    app.use(cors());
    app.use(morgan('dev'));
    app.use(helmet());
};

export const initServer = () => {
    const app =  express();
    const PORT = process.env.PORT;
    app.set('trust proxy', 1);

    try{
        middlewares(app);

        app.listen(PORT, () => {
            console.log(`Kinal Sports admin server running on port ${PORT}`)
        })
    }catch(err){
        console.error(`Error al inicia el servidor: ${err.message}`);
        process.exit(1);
    }
}