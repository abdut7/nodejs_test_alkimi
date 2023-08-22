import {
    subscriptionSchema
} from "../entity";
import {
    createSubscriptionUsecase,
    listSubscribedChannelsUsecase
} from '../usecase'
import {
    createSubscriptionControllerFactory,
    listSubscriptionControllerFactory
} from "./subscriptionController";

const createSubscriptionController = createSubscriptionControllerFactory({
    createSubscriptionUsecase,
    subscriptionSchema
});

const listSubscriptionController = listSubscriptionControllerFactory({
    listSubscribedChannelsUsecase
});

export {
    createSubscriptionController,
    listSubscriptionController
}