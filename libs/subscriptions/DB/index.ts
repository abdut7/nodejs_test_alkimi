import { Model } from 'sequelize';
import errHandler from "../../core/helpers/errHandler";

export async function createSubscriptionDB(UserSubcription, objSubscriptionBodySchema) {
    return UserSubcription.create(objSubscriptionBodySchema)
        .then(newUserSubcription => {
            return newUserSubcription.toJSON();
        })
        .catch(error => {
            console.error('Error creating Channel:', error);
            throw new errHandler(error);
        });
}

export async function findSubscribedChannelsDB(Channel, Package, UserSubcription, PackageChannelMap, fkUserId) {
   // let arrAddOnChannels = await
    return UserSubcription.findAll({
        where: {
            fkUserId
        },
            include: [{
                model: Channel,
            },
            {
                model: Package,
                include:[{
                    model: PackageChannelMap,
                    required: true,
                    include:[{
                        model: Channel,
                        required: true,
                    }]
                },]
            }
         ],
        })
        .then(arrList => {
            if (arrList ?.length)
                return arrList.map(user => user.toJSON());
            else
                return []
        })
        .catch(error => {
            throw new errHandler(error);
        });
    // let arrPAckageChannels = await PackageChannelMap.findAll({
    //         include: [{
    //             model: Package,
    //             required: true,
    //             include: [{
    //                 model: UserSubcription,
    //                 required: true,
    //                 include:[{
    //                     model:Channel,
    //                     require:true
    //                 }],
    //                 where: {
    //                     fkUserId
    //                 },
    //             }]
    //         }, ],
    //     })
    //     .then(arrList => {
    //         if (arrList ?.length)
    //             return arrList.map(user => user.toJSON());
    //         else
    //             return []
    //     })
    //     .catch(error => {
    //         throw new errHandler(error);
    //     });
    // return {
    //     arrPAckageChannels,
    //     arrAddOnChannels
    // }
}