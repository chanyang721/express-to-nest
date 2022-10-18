import 'reflect-metadata';
import express, { Express } from 'express';
import http, { Server } from 'http';
import config from './config/env/environment';
import middlewares from './middlewares/express';

class App {
    private app: Express
    private server: Server
    private port: number
    private env: string

    constructor() {
        this.app = express()
        this.server = http.createServer(this.app)
        this.port = Number(config.PORT)
        this.env = process.env.NODE_ENV || 'development'
    }

    private middlewares() {
        middlewares(this.app)
        console.log(`[ ${this.env} ] | Middlewares loaded`)
    }

    private database() {
        console.log(`[ ${this.env} ] | Database Connection`)
    }

    private routes() {
        console.log(`[ ${this.env} ] | Routes loaded`)
    }

    private run(): void {
        try {
            this.server.listen(this.port, () => {
                console.log(`[ ${this.env} ] | Server running on port ${this.port}`)
            })
        }
        catch (error) {
            console.error(`[ ${this.env} ] | Server is not working: ${error}`)
        }
    }

    public main(): void {
        this.middlewares()
        this.database()
        this.routes()
        this.run()
    }
}

//** Run App */
(
    () => {
        const app = new App()
        app.main()
    }
)();
