import * as joi from "joi";

const validationSchema = joi.object({
  NODE_ENV: joi.string().valid('development', 'production', 'test').default('development'),
  PORT: joi.number().default(3000),
  DATABASE_URL: joi.string().uri().required()
}).unknown(true)

export default validationSchema