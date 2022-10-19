import { DataSource } from "typeorm"
import config from "../config/env/environment"


export class DatabaseConnection {
    private host: string
    private port: number
    private username: string
    private password: string
    private database: string

    consturctor() {
        this.setConnectionInfo()
    }

    private setConnectionInfo() {
        this.port = +config.DB.PORT
        this.host = config.DB.HOST
        this.username = config.DB.USERNAME
        this.password = config.DB.PASSWORD
        this.database = config.DB.DATABASE
    }

    private async connect() {
        return new DataSource({
            type: 'mysql',
            host: this.host,
            port: this.port,
            username: this.username,
            password: this.password,
            database: this.database
        })
    }

    public async getDbConnection() {
        return await this.connect()
    }
}