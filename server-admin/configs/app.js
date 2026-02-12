'use strict'

import express, { application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { dbConnection } from './db.js';

const BASE_PATH = '/kinalSports/v1';

const middlewares = (app) =>{
    app.use(express.urlencoded({extended: false, limit: '10mb'}));
    app.use(express.json({limit: '10mb'}));
    app.use(cors());
    app.use(morgan('dev'));
    app.use(helmet());
};

const routes = (app) => {
    app.get(`${BASE_PATH}/health`, (req, res) => {
        res.status(200).json({
            status: 'healthy',
            service: 'Kinal Sports Admin Server'
        })
    })

    app.use((req, res) => {
        res.status(404).json({
            succes: false,
            message: 'Ruta no existe en el servidor'
        })
    })
}

export const initServer = async() => {
    const app =  express();
    const PORT = process.env.PORT;
    app.set('trust proxy', 1);

    try{
        await dbConnection();
        middlewares(app);
        routes(app);

        app.listen(PORT, () => {
            console.log(`Kinal Sports admin server running on port ${PORT}`)
            console.log(`Health check endpoint: http://localhost:${PORT}${BASE_PATH}/health`)
        })
    }catch(err){
        console.error(`Error al inicia el servidor: ${err.message}`);
        process.exit(1);
    }
}