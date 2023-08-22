import errHandler from "./errHandler";
/**
 * Environment variables parsing from env file
 */
export async function setEnvVariable(strPath) {
  try {
    if (strPath) {
      return await require('dotenv').config({
        path: strPath
      });
    } else throw new errHandler('ENV_FILE_PATH_IS_NOT_GIVEN','errServer');
  } catch (error) {
    throw new errHandler(error);
  }
}

/**
 * Function to get Environment variable
 */
export async function getEnvVariable(strKey = null) {
  try {
    let objMods = {
      DEVELOPMENT: 'DEV_',
      STAGE: 'STAG_',
      PRODUCTION: 'PRO_'
    };
    let MODE = objMods[process.env.NODE_ENV];
    if (strKey) {
      return await (process.env[MODE + strKey]
        ? process.env[MODE + strKey]
        : process.env[strKey]);
    }
    return await {
      objPort: process.env[MODE + 'PORT'],
      objServiceName: process.env['SERVICE_NAME'],
      objSecurityToken: {
        strAccessKey: process.env[MODE + 'ACCESS_PUB_KEY_PATH'],
        strAccessSecret: process.env[MODE + 'ACCESS_PRIV_KEY_PATH'],
        strAccessSignAlg: process.env['JWT_ACCESS_SIGNING_ALGORITHM'],
        strAccessTockenExpiry: process.env[MODE + 'ACCESS_TOKEN_EXPIRY'],
        strRefreshKey: process.env[MODE + 'REFRESH_PUB_KEY_PATH'],
        strRefreshSecret: process.env[MODE + 'REFRESH_PRIV_KEY_PATH'],
        strRefreshSignAlg: process.env['JWT_REFRESH_SIGNING_ALGORITHM'],
        strRefreshTockenExpiry: process.env[MODE + 'REFRESH_TOKEN_EXPIRY']
      },
      objDbConfig: {
        database: process.env[MODE + 'DB'],
        client: process.env[MODE + 'DB_CLIENT'],
        host: process.env[MODE + 'DB_HOST'],
        port: process.env[MODE + 'DB_PORT'],
        user: process.env[MODE + 'DB_HOST_USER'],
        password: process.env[MODE + 'DB_HOST_PASS']
      },
      objRedisConfig: {
        host: process.env[MODE + 'REDIS_HOST'],
        port: process.env[MODE + 'REDIS_PORT']
      }
    };
  } catch (error) {
    throw new errHandler(error);
  }
}
