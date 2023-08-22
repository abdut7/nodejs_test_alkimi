import errHandler from "../../core/helpers/errHandler";

export default function createSubscriptionUsecaseFactory({
    UserSubcription,
    createSubscriptionDB
}) {
    return async function createSubscriptionUsecase({
        source,
        objSubscriptionBodySchema
    }) {
        try {
            const objSubcription = await createSubscriptionDB(UserSubcription, objSubscriptionBodySchema);
            return {
                "strMessage": "Created",
                data: objSubcription
            };
        } catch (error) {
            console.log("errorr.....", error);

            throw new errHandler(error);
        }
    };
}