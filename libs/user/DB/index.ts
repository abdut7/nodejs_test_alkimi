import errHandler from "../../core/helpers/errHandler";

export async function createUserDB(User,objUserBodySchema) {
    return User.create(objUserBodySchema) 
      .then(newUser => {
        return newUser.toJSON();
      })
      .catch(error => {
        console.error('Error creating user:', error);
        if(error?.name == 'SequelizeUniqueConstraintError'){
             throw new errHandler('This User Name Already Exists');
            }
        throw new errHandler(error);
      });
}


export async function findOneUserDB(User,strUserName:string) {
    return User.findOne({
        where: {
          strUserName: strUserName, 
        },
      })
      .then(objUser => {
        if(!objUser){
            throw new errHandler('Credential Invalid');
        }
        return objUser.toJSON();
      })
      .catch(error => {
        throw new errHandler(error);
      });
}