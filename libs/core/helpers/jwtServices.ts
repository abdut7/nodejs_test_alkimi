import fs from "fs";
import jwt from "jsonwebtoken";
import errHandler from "./errHandler";

export async function jwtSignIn(objPayload, objOption) {
  try {
    let strKey = await fs.readFileSync('private.key', 'utf-8');
    console.log(objPayload,"strKey",strKey);
    
    let objOptions = await {
      issuer: objOption["issuer"],
      subject: objOption["subject"],
      audience: objOption["audience"],
      algorithm: "RS256"
    };

    let strToken = await jwt.sign(objPayload, strKey, objOptions);
    return strToken;
  } catch (error) {
    throw new errHandler(error);
  }
}

export async function jwtVerify(strToken, objOption) {
  try {
    let strKey = await fs.readFileSync('public.key', 'utf-8');
    let objOptions = {
      issuer: objOption["issuer"],
      subject: objOption["subject"],
      audience: objOption["audience"],
      algorithm: 'RS256'
    };
    return jwt.verify(strToken, strKey, objOptions)
  } catch (error) {
    throw new errHandler(error);
  }
}

