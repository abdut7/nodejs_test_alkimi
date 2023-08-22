import createUserUsecaseFactory from './userRegisterUsecase'
import loginUseCaseFactory from './loginUsecase';
import User from '../../models/User'; 
import { hashString, compareHashAndText } from '../../core/helpers/cryptoServices';
import { jwtSignIn } from '../../core/helpers/jwtServices';
import { createUserDB, findOneUserDB } from '../DB';
const createUserUsecase = createUserUsecaseFactory({User,hashString,createUserDB});
const loginUseCase = loginUseCaseFactory({  
    findOneUserDB,
    User,
    compareHashAndText,
    jwtSignIn})
export {
    createUserUsecase,
    loginUseCase
}