import Joi from 'joi';
import {
    Subcriptiontype
} from '../../constants/enum';

export const subscriptionSchema = Joi.object({
    fkUserId: Joi.number().positive().required(),
    fkPackageId: Joi.number().positive(),
    fkChannelId: Joi.number().positive(),
    strSubcriptionType:  Joi.string().valid(...Subcriptiontype),
}).xor('fkPackageId', 'fkChannelId');;
