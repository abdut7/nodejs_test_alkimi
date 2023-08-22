import moment from 'moment-timezone'
import errHandler from "./errHandler";
export function makeCallback(controller) {
    return (req, res) => {
        try {
            const httpRequest = {
                body: req.body,
                query: req.query,
                params: req.params,
                ip: req.ip,
                strContextName: req.strName,
                authorization: req.get("x-access-token"),
                intUserId: req.intUserId,
                pkUserId:req.pkUserId,
                method: req.method,
                timReceived: moment().tz("Asia/Kolkata").format('YYYY-MM-DD hh:mm:ss a'),
                path: req.originalUrl,
                headers: {
                    "Content-Type": req.get("Content-Type"),
                    Referer: req.get("referer"),
                    "User-Agent": req.get("User-Agent")
                }
            };
            controller(httpRequest)
                .then(
                    ({
                        headers: headers = {
                            "Content-Type": "application/json",
                            "Last-Modified": new Date().toUTCString()
                        },
                        type = "json",
                        statusCode: code = 200,
                        body
                    }) => {
                        if (!body) throw new Error("EMPTY_RESPONSE");
                        res.set(headers);
                        res.type(type);
                        res.status(code).send({...body,status:true});
                    }
                )
                .catch(error => {
                    let Responce = new errHandler(error).send();
                    res
                        .status(Responce.statusCode)
                        .set({
                            "Content-Type": "application/json",
                            "Last-Modified": new Date().toUTCString()
                        })
                        .send({...Responce.body,status:false});
                });
        } catch (error) {
            let Responce = new errHandler(error).send();
            res
                .status(Responce.statusCode)
                .set({
                    "Content-Type": "application/json",
                    "Last-Modified": new Date().toUTCString()
                })
                .send({...Responce.body,status:false});
        }
    };
}