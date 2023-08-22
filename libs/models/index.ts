import { Sequelize } from 'sequelize-typescript';
import User from './User'
import Channel from './Channel';
import Package from './Package'
import PackageChannelMap from './PackageChannelMapping';
import UserSubcription from './UserSubscriptions';
import { arrChannelsData, arrPAckageChannelMapData, arrPackagesData, arrUserData } from './seed/data';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'alkimi',
});
const seedExecution =async ()=>{
  await User.bulkCreate(arrUserData);
  await Channel.bulkCreate(arrChannelsData);
  await Package.bulkCreate(arrPackagesData);
  await PackageChannelMap.bulkCreate(arrPAckageChannelMapData);
};

export default {
    async connect({isSync}) {
        try {
            await sequelize.authenticate();
            await sequelize.addModels([User,Channel,Package,PackageChannelMap,UserSubcription]);
            console.log('Database connection established.');
            if(isSync)
            await sequelize.sync({ force: true }).then(async () => {
              console.log('Database synchronized successfully');
              await seedExecution();
            });
        } catch(err) {
            console.error('The connection to the database could not be established.',err);
        }
    },
    
    async close() {
        await sequelize.close();
        console.log('Database connection closed.');
    },
    async getConnection(){
      return await sequelize
    },
    async getTransaction() {
        return await sequelize.transaction();
    }
};