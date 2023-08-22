import errHandler from "../../core/helpers/errHandler";

export function createChannelControllerFactory({
    createChannelUsecase,
    channelSchema
}) {
    return async function createChannelController({
        body: objChannelBodyData,
        ...source
    }) {
        try {
            const { error, value } = channelSchema.validate(objChannelBodyData);
            if (error) {
                throw new errHandler("VALIDATION_ERROR");
            }

            let objResponse = await createChannelUsecase({
                objChannelBodySchema: value,
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

export function listChannelControllerFactory({
    listChannelUsecase
}) {
    return async function listChannelController({
        ...source
    }) {
        try {
            let objResponse = await listChannelUsecase({
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

export function deleteChannelControllerFactory({
    deleteChannelUsecase
}) {
    return async function deleteChannelController({
        body:objChannelBody,
        ...source
    }) {
        try {
            let objResponse = await deleteChannelUsecase({
                objChannelBody,
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