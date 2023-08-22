import express from "express";
import { makeCallback } from "../../libs/core/helpers/makeController";
import { createChannelController, deleteChannelController, listChannelController } from "../../libs/channels/controller";
import { createSubscriptionController, listSubscriptionController } from "../../libs/subscriptions/controller";

let router = express.Router();
router.post("/create_channel", makeCallback(createChannelController));
router.post("/delete_channel", makeCallback(deleteChannelController));
router.get("/channel_list", makeCallback(listChannelController));
router.get("/subscribed_channel_list", makeCallback(listSubscriptionController));
router.post("/create_subscription", makeCallback(createSubscriptionController));


export default router;
