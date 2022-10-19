import express, { Express } from 'express';
import cors, { CorsOptions } from 'cors'
import helmet from 'helmet'
import hpp from 'hpp'
import morgan from 'morgan'


export default (app: Express) => {
    const corsOptions: CorsOptions = {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true
    }

    app.use(cors(corsOptions))
    app.use(express.json())
    app.use(helmet())
    app.use(hpp())
    app.use(morgan(process.env.ENV_NODE === 'development' ? 'dev' : 'combined'))
}