import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
    PORT: number;
    DB_NAME: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_HOST: string;
    DB_PORT: number;
}

const envVarsSchema: joi.ObjectSchema = joi.object({
    PORT: joi.number().required(),
    DB_NAME: joi.string().required(),
    DB_USER: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_HOST: joi.string().required(),
    DB_PORT: joi.number().required(),
}).unknown(true);

const { error, value } = envVarsSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const EnvVars: EnvVars = value;

export const envs={
    PORT: EnvVars.PORT,
    DB_NAME: EnvVars.DB_NAME,
    DB_USER: EnvVars.DB_USER,
    DB_PASSWORD: EnvVars.DB_PASSWORD,
    DB_HOST: EnvVars.DB_HOST,
    DB_PORT: EnvVars.DB_PORT,
}
