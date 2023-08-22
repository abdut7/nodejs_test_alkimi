import Joi from 'joi';
import {
    ChannelCategory,
    ChannelLanguage
} from '../../constants/enum';

export const channelSchema = Joi.object({
    strChannelName: Joi.string().min(3).max(30).required(),
    intAddOnMonthlyPrice: Joi.number().positive().required(),
    strCategory:  Joi.string().valid(...ChannelCategory),
    strLanguage:  Joi.string().valid(...ChannelLanguage),
});
