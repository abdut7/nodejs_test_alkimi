import express from "express";
import { makeCallback } from "../../libs/core/helpers/makeController";
import { userCreateController,loginUserController } from "../../libs/user/controller";
let router = express.Router();

router.post("/create_user", makeCallback(userCreateController));
router.post("/login", makeCallback(loginUserController));

export default router;
