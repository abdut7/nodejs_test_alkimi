import { userSchema, userUpdateShema, loginSchema } from "../entities/user.entity";
import {createUserUsecase, loginUseCase} from '../usecases';
import { createUserControllerFactory, loginUserControllerFactory } from "./userController";

const userCreateController = createUserControllerFactory({createUserUsecase,userSchema});
const loginUserController = loginUserControllerFactory({loginUseCase,loginSchema});
export {
    userCreateController,
    loginUserController
}