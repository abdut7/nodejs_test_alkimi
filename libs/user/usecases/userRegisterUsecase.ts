import errHandler from "../../core/helpers/errHandler";

export default function createUserUsecaseFactory({
    User,
    hashString,
    createUserDB
}) {
    return async function createUserUsecase({
        source,
        objUserBodySchema
    }) {
        try {
            const objUserCreate = await createUserDB(User,{
                ...objUserBodySchema,
                strPassword:await hashString(objUserBodySchema.strPassword)
            });
            console.log("objUserCreate......    ",objUserCreate);
            
            return {
                data: objUserCreate
            };
        } catch (error) {
            console.log("errorr.....",error);
            
            throw new errHandler(error);
        }
    };
}