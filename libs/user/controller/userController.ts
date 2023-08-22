import errHandler from "../../core/helpers/errHandler";

export function createUserControllerFactory({
    createUserUsecase,
    userSchema
}) {
    return async function createUserController({
        body: objUserBodyData,
        ...source
    }) {
        try {
            const { error, value } = userSchema.validate(objUserBodyData);
            if (error) {
                throw new errHandler("VALIDATION_ERROR");
            }

            let objResponse = await createUserUsecase({
                objUserBodySchema: value,
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


export function loginUserControllerFactory({
    loginUseCase,
    loginSchema
}) {
    return async function loginUserController({
        body: objUserBodyData,
        ...source
    }) {
        try {
            const { error, value } = loginSchema.validate(objUserBodyData);
            if (error) {
                throw new errHandler("VALIDATION_ERROR");
            }

            let objResponse = await loginUseCase({
                objLoginSchema: value,
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