import createSubscriptionUsecaseFactory from "./createSubscriptionUsecase";
import {
    createSubscriptionDB,
    findSubscribedChannelsDB
} from "../DB";
import Channel from "../../models/Channel";
import Package from '../../models/Package'
import UserSubcription from '../../models/UserSubscriptions'
import PackageChannelMap from '../../models/PackageChannelMapping'
import listSubscribedChannelsUsecaseFactory from "./listSubscribedChannelsUsecase";

const createSubscriptionUsecase = createSubscriptionUsecaseFactory({
    UserSubcription,
    createSubscriptionDB
});
const listSubscribedChannelsUsecase = listSubscribedChannelsUsecaseFactory({
    Channel,
    Package,
    UserSubcription,
    PackageChannelMap,
    findSubscribedChannelsDB
});

export {
    createSubscriptionUsecase,
    listSubscribedChannelsUsecase
}