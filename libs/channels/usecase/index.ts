import createChannelUsecaseFactory from "./createChannelUsecase";

import { createChannelDB, findAllChannelDB, deleteChannelDB } from "../DB";
import Channel from "../../models/Channel";
import ListChannelUsecaseFactory from "./listChannelUsecase";
import deleteChannelUsecaseFactory from "./deleteChannel";

const createChannelUsecase = createChannelUsecaseFactory({  
    Channel,
    createChannelDB});
const listChannelUsecase = ListChannelUsecaseFactory({Channel,findAllChannelDB});
const deleteChannelUsecase = deleteChannelUsecaseFactory({Channel,deleteChannelDB});

export { createChannelUsecase, listChannelUsecase, deleteChannelUsecase }