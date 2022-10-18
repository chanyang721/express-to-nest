import 'reflect-metadata';
import express, { Express } from 'express';
import http, { Server } from 'http';
import config from './config/env/environment';

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
        console.log('Loading Middlewares')
    }

    private database() {
        console.log('Database Connection')
    }

    private routes() {
        console.log(`Loading Routes`)
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
