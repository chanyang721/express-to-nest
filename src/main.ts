import 'reflect-metadata';
import express, { Express } from 'express';
import config from './config/env/environment';
import middlewares from './middlewares/express';
import { Injectable, Inject } from './helpers/helper.di';
import { DatabaseConnection } from "./database/connection";

@Injectable()
class App {
    private app: Express
    private port: number
    private env: string

    constructor(
        @Inject('Database') private db: DatabaseConnection,
    ) {
        this.app = express()
        this.port = +config.PORT
        this.env = process.env.NODE_ENV || 'development'
    }

    private middlewares() {
        middlewares(this.app)
        console.log(`[ ${this.env} ] | Middlewares loaded`)
    }

    private async database() {
        await this.db.getConn()
        console.log(`[ ${this.env} ] | Database Connected`)
    }

    private routes() {
        console.log(`[ ${this.env} ] | Routes loaded`)
    }

    private run(): void {
        try {
            this.app.listen(this.port, () => {
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
        const app = new App(
            new DatabaseConnection()
        )
        app.main()
    }
)();
