import { configDotenv } from "dotenv";
if(process.env.NODE_ENV !== 'production'){
    configDotenv();
}

export const PORT = process.env.PORT;
export const MONGODB_URL = process.env.MONGODB_URL;