import errHandler from "../../core/helpers/errHandler";

export default function loginUseCaseFactory({
    findOneUserDB,
    User,
    compareHashAndText,
    jwtSignIn
}) {
    return async function loginUserUseCase({
        objLoginSchema,
        source
    }) {
        try {
            let strAccessToken;
            let strRefreshToken;
            /**
             * get User Name
             */
            let objUserData = await findOneUserDB(User, objLoginSchema.strUserName);
            console.log("objUserData", objUserData);

            /**
             * decrypt password from database and compare with recieved password
             */
            let isPasswordMatched = await compareHashAndText(
                objLoginSchema.strPassword,
                objUserData.strPassword
            );
            /**
             * is password matched Then issue new refresh token and access token
             */

            if (isPasswordMatched === true) {

                strAccessToken = await jwtSignIn({
                    pkUserId: objUserData['pkUserId'],
                    strUserName: objUserData['strUserName'],
                    strUserType: objUserData['strUserType']
                }, {
                    issuer: "issuer",
                    subject: "IP",
                    audience: "ABDU"
                });
                delete objUserData.strPassword
                return ({
                    data: {
                        ...objUserData,
                        strAccessToken
                    }
                })
            } else {
                throw new errHandler(
                    "INVALID_LOGIN_CREDENTIALS",
                    "errModuleWise"
                ).setStatus(401);
            }
        } catch (error) {
            throw new errHandler(error);
        }
    };
}