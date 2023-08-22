import { jwtVerify } from "../helpers/jwtServices";
import errHandler from "../helpers/errHandler";

/**
 *
 * @param req
 * @param res
 * @param next
 * token verify as new request come from client
 */
export async function checkToken(req, res, next) {
  let objResponceType = {
    "Content-Type": "application/json",
    "Last-Modified": new Date().toUTCString()
  };

  try {
    // Express headers are auto converted to lowercase
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    if (token) {
      // Remove Bearer from string
      if (token.startsWith("Bearer "))
        token = await token.slice(7, token.length);
      const objOption = {
        issuer: "issuer",
        subject: "IP",
        audience: "ABDU"
    }
    const objTokenDecoded = await jwtVerify(token, objOption);
    if(!objTokenDecoded){
        return res
        .status(401)
        .set(objResponceType)
        .send(new errHandler("INVALID_TOKEN_PROVIDED").send().body);
    }
    req["intUserId"] = objTokenDecoded["intUserId"]
    req["strUserType"] = objTokenDecoded["strUserType"]
    req["pkUserId"] = objTokenDecoded["pkUserId"]
    next()
    }else{
        return res
        .status(401)
        .set(objResponceType)
        .send(new errHandler("INVALID_TOKEN_PROVIDED").send().body);
    }
  } catch (error) {
    return res
      .status(401)
      .set(objResponceType)
      .send(new errHandler(error).send().body);
  }
}
