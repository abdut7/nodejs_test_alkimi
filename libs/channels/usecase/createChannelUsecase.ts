import errHandler from "../../core/helpers/errHandler";

export default function createChannelUsecaseFactory({
    Channel,
    createChannelDB
}) {
    return async function createChannelUsecase({
        source,
        objChannelBodySchema
    }) {
        try {
            const objChannelCreate = await createChannelDB(Channel,objChannelBodySchema);
            console.log("objChannelCreate......    ",objChannelCreate);

            return {
                "strMessage":"Created",
                data: objChannelCreate
            };
        } catch (error) {
            console.log("errorr.....",error);
            
            throw new errHandler(error);
        }
    };
}