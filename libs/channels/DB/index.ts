import errHandler from "../../core/helpers/errHandler";

export async function createChannelDB(Channel,objChannelBodySchema) {
    return Channel.create(objChannelBodySchema) 
      .then(newChannel => {
        return newChannel.toJSON();
      })
      .catch(error => {
        console.error('Error creating Channel:', error);
        if(error?.name == 'SequelizeUniqueConstraintError'){
             throw new errHandler('This Channel Name Already Exists');
            }
        throw new errHandler(error);
      });
}

export async function findAllChannelDB(Channel) {
    return Channel.findAll()
        .then(arrList => {
            if (arrList ?.length)
                return arrList.map(user => user.toJSON());
            else
                return []
        })
        .catch(error => {
            throw new errHandler(error);
        });
}

export async function deleteChannelDB(Channel,id) {
    return Channel.destroy({
            where: {
                pkChannelId:id
            },
        })
        .then(rowsAffected => {
            if (!rowsAffected)
                return false;
            return true;
        })
        .catch(error => {
            throw new errHandler(error);
        });
}