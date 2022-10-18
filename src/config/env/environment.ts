import { config } from "dotenv";
config()

export default {
    PORT: process.env.PORT || 4000,
    HOST: process.env.HOST || 'localhost',

    DB: {
        PORT: process.env.DATABASE_PORT || 3306,
        HOST: process.env.DATABASE_HOST || 'localhost',
        USERNAME: process.env.DATABASE_USER || 'root',
        PASSWORD: process.env.DATABASE_PASSWORD || '1q2w',
        DATABASE: process.env.DATABASE_NAME || 'database'
    }

}