import errHandler from "../../core/helpers/errHandler";

export default function listSubscribedChannelsUsecaseFactory({
    Channel,
    Package,
    UserSubcription,
    PackageChannelMap,
    findSubscribedChannelsDB
}) {
    return async function listSubscribedChannelsUsecase({
        source
    }) {
        try {
            const arrChannelList = await findSubscribedChannelsDB(Channel,Package,UserSubcription,PackageChannelMap,source.pkUserId)
            return {
                data: arrChannelList
            };
        } catch (error) {
            console.log("errorr.....",error);
            
            throw new errHandler(error);
        }
    };
}