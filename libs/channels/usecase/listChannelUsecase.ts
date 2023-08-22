import errHandler from "../../core/helpers/errHandler";

export default function ListChannelUsecaseFactory({
    Channel,
    findAllChannelDB
}) {
    return async function ListChannelUsecase() {
        try {
            const arrChannelList = await findAllChannelDB(Channel)

            return {
                data: arrChannelList
            };
        } catch (error) {
            console.log("errorr.....",error);
            
            throw new errHandler(error);
        }
    };
}