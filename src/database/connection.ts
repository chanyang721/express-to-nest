import { DataSource } from "typeorm"
import config from "../config/env/environment"

const AppDataSource = new DataSource({
    type: "mysql",
    host: config.DB.HOST,
    port: +config.DB.PORT,
    username: config.DB.USERNAME,
    password: config.DB.PASSWORD,
    database: config.DB.DATABASE,
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })