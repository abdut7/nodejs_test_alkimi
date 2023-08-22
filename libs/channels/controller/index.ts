import { channelSchema } from "../entity";
import {createChannelUsecase,listChannelUsecase, deleteChannelUsecase} from '../usecase'
import { createChannelControllerFactory, deleteChannelControllerFactory, listChannelControllerFactory } from './channelController'

const createChannelController = createChannelControllerFactory({
    createChannelUsecase,
    channelSchema
});

const listChannelController = listChannelControllerFactory({listChannelUsecase});
const deleteChannelController = deleteChannelControllerFactory({deleteChannelUsecase})
export {
    createChannelController,
    listChannelController,
    deleteChannelController
}