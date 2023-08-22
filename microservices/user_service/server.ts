import cors from "cors";
import path from "path";
import express from "express";
import routes from "./router";
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express';
import database from '../../libs/models'
import * as serverHandlers from "./serverHandlers";
import {
  setEnvVariable,
  getEnvVariable
} from "../../libs/core/helpers/envConfig";
import errHandler from "../../libs/core/helpers/errHandler";
import { generateLogger } from "../../libs/core/helpers/logManager";
import swaggerSpecs from './swagger'

try {
    database.connect({isSync:false});
  //set environment variables
  setEnvVariable(path.join(__dirname, "./config/env/serviceConfig.env"));
  setEnvVariable(
    path.join(__dirname, "../../libs/core/config/env/appConfig.env")
  );

  const objServiceApp:any = express();
  //middlewares configuration
  objServiceApp.use(cors());
  //objServiceApp.use(checkToken);
  objServiceApp.use(bodyParser.json());
  objServiceApp.use(function(err, req, res, next) {
    if (err instanceof SyntaxError && "body" in err) {
      res.status(400).send({
        errCommon: [{ strMessage: "INVALID_JSON" }]
      });
    } else next();
  });
  objServiceApp.use("/", routes);
  objServiceApp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
  getEnvVariable()
    .then(async objCurrentEnv => {
      let currentEnv:any = await objCurrentEnv;
     // const Server: http.Server = await http.createServer(objServiceApp);
      //Binds and listens for connections on the specified host
      await generateLogger()
      objServiceApp.listen(currentEnv["objPort"], () =>
        console.log(
          `${currentEnv["objServiceName"]} : ${currentEnv["objPort"]}`
        )
      );
      //Server Error Handler for initialization error
      objServiceApp.on("error", (error: Error) =>
        serverHandlers.onError(error, currentEnv["objPort"])
      );
    })
    .catch(error => {
      throw new errHandler(error);
    });
} catch (error) {
  console.log(new errHandler(error).send().body);
}
