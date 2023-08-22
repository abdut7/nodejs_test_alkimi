import errHandler from "../../core/helpers/errHandler";

export default function deleteChannelUsecaseFactory({
    Channel,
    deleteChannelDB
}) {
    return async function deleteChannelUsecase({
        source,
        objChannelBody
    }) {
        try {
            const isDeleted = await deleteChannelDB(Channel, objChannelBody.id);
            return {
                "strMessage": isDeleted ? "Deleted" : "Failed",
                data: null
            };
        } catch (error) {
            console.log("errorr.....", error);

            throw new errHandler(error);
        }
    };
}