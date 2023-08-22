import crypto from "crypto-js";
import errHandler from "./errHandler";
import bcrypt from "bcryptjs";

export function  hashString (strInput) {
    return new Promise(function (resolve, reject) {
      try {
        if (strInput.length > 0) {
          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(strInput, salt, function (err, hash) {
              resolve(hash);
            });
          });
        } else {
          reject("NULL_INPUT_RECVD");
        }
      } catch (error) {
        throw new Error(error);
      }
    });
  }

export function encrypt(strData) {
  return new Promise(function(resolve, reject) {
    try {
      if (strData.length > 0) {
        // bcrypt.hash(strData, 10).then(function(hash) {
        //   resolve(hash)
        // });
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(strData, salt, function(err, hash) {
            resolve(hash);
          });
        });
      } else {
        reject("NULL_INPUT_RECVD");
      }
    } catch (error) {
      throw new errHandler(error);
    }
  });
}

export function compareHashAndText(strPassword, strHashPassword) {
  return new Promise(async function(resolve, reject) {
    try {
      if (strPassword && strHashPassword) {
        const match = await bcrypt.compareSync(strPassword, strHashPassword);
        resolve(match);
      } else {
        reject("NULL_INPUT_RECVD");
      }
    } catch (error) {
      throw new errHandler(error);
    }
  });
}
