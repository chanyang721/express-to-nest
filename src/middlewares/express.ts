import { Express } from 'express';
import cors, { CorsOptions } from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import hpp from 'hpp'


export default (app: Express) => {
    const corsOptions: CorsOptions = {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true
    }

    app.use(cors(corsOptions))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(helmet())
    app.use(hpp())
}