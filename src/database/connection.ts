import { DataSource } from "typeorm"
import { Injectable, Register } from "../helpers/helper.di"
import config from "../config/env/environment"

@Injectable()
@Register([{ token: 'Database', useClass: DatabaseConnection }])
export class DatabaseConnection {
    public host: string
    public port: number
    public username: string
    public password: string
    public database: string

    constructor() {
        this.host = config.DB.HOST
        this.port = +config.DB.PORT
        this.username = config.DB.USERNAME
        this.password = config.DB.PASSWORD
        this.database = config.DB.DATABASE
    }

    private connect() {
        const dataSource = new DataSource({
            type: 'mysql',
            host: this.host,
            port: this.port,
            username: this.username,
            password: this.password,
            database: this.database,
        })

        return dataSource.initialize()
            .then((res) => {
                console.log(`[ ${process.env.ENV_NODE} ] | ${res.driver.database} database connected successfully`)
            })
            .catch((error) => {
                console.log('database connection failed', error)
            })
    }

    public async getConn() {
        return await this.connect()
    }

}