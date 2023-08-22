import Joi from 'joi';
import {
    Roles
} from '../../constants/enum';

export const userSchema = Joi.object({
    strUserName: Joi.string().min(3).max(30).required(),
    strUserType: Joi.string().valid(...Object.values(Roles)),
    strPassword: Joi.string().min(8).required(),
});

export const userUpdateShema = userSchema.append({
    id: Joi.number().integer().required(),
})

export const loginSchema = Joi.object({
    strUserName: Joi.string().min(3).max(30).required(),
    strPassword: Joi.string().min(8).required(),
})