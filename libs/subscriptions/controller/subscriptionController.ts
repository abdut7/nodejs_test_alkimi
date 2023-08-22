import errHandler from "../../core/helpers/errHandler";

export function createSubscriptionControllerFactory({
    createSubscriptionUsecase,
    subscriptionSchema
}) {
    return async function createSubscriptionController({
        body: objSubscriptionBodyData,
        ...source
    }) {
        try {
            console.log({
                ...objSubscriptionBodyData,
                fkUserId: source });
            
            const {
                error,
                value
            } = subscriptionSchema.validate({
                ...objSubscriptionBodyData,
                fkUserId: source ?.pkUserId
            });
            if (error) {
                throw new errHandler("VALIDATION_ERROR");
            }

            let objResponse = await createSubscriptionUsecase({
                objSubscriptionBodySchema: value,
                source
            });

            return {
                body: objResponse
            };
        } catch (error) {
            let objError = new errHandler(error);
            return objError.send();
        }
    };
}

export function listSubscriptionControllerFactory({
    listSubscribedChannelsUsecase
}) {
    return async function listSubscriptionController({
        ...source
    }) {
        try {
            let objResponse = await listSubscribedChannelsUsecase({
                source
            });

            return {
                body: objResponse
            };
        } catch (error) {
            let objError = new errHandler(error);
            return objError.send();
        }
    };
}

export function deleteSubscriptionControllerFactory({
    deleteSubscriptionUsecase
}) {
    return async function deleteSubscriptionController({
        body: objSubscriptionBody,
        ...source
    }) {
        try {
            let objResponse = await deleteSubscriptionUsecase({
                objSubscriptionBody,
                source
            });

            return {
                body: objResponse
            };
        } catch (error) {
            let objError = new errHandler(error);
            return objError.send();
        }
    };
}