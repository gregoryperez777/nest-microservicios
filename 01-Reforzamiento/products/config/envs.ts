import * as joi from 'joi';

interface EnvVars {
    PORT: number;
}

const envsSchema = joi.object({
    PORT: joi.number().required()
})
.unknown(true); // ---> unknown permite aceptar propiedades que no esten declaradas en envsSchema 

const { error, value} = envsSchema.validate(process.env)

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;


export const envs = {
    port: envVars.PORT,
}