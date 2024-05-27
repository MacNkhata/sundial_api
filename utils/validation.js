import Joi from 'joi';

export const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(2).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate({
    username: data.body.username,
    email: data.body.email,
    password: data.body.password,
  });
};

export const LoginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate({
    email: data.body.email,
    password: data.body.password,
  });
};
