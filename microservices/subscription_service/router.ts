import express from "express";
import { makeCallback } from "../../libs/core/helpers/makeController";
import { createChannelController, deleteChannelController, listChannelController } from "../../libs/channels/controller";
import { createSubscriptionController, listSubscriptionController } from "../../libs/subscriptions/controller";

let router = express.Router();

/**
 * @swagger
 * /create_channel:
 *   post:
 *     summary: Create a Channel 
 *     description: Create a Channel 
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               strChannelName:
 *                 type: string
 *                 example: ANI
 *               intAddOnMonthlyPrice:
 *                 type: number
 *                 example: 79
 *               strCategory:
 *                 type: string
 *                 example: News
 *               strLanguage:
 *                 type: string
 *                 example: English
 *     responses:
 *       200:
 *         description: Created
 *         content:
 *           application/json:
 *             example:
 *               data: {}
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid Token
 */
router.post("/create_channel", makeCallback(createChannelController));

/**
 * @swagger
 * /delete_channel:
 *   post:
 *     summary: Delete Channel
 *     description:  Delete Channel
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *                 example: 1
 *     responses:
 *       200:
 *         description: Deleted
 *         content:
 *           application/json:
 *             example:
 *               data: {}
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid Token
 */
router.post("/delete_channel", makeCallback(deleteChannelController));

/**
 * @swagger
 * /channel_list:
 *   get:
 *     summary: Channel List
 *     description: Channel List 
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Data
 *         content:
 *           application/json:
 *             example:
 *               data: []
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid Token
 */
router.get("/channel_list", makeCallback(listChannelController));

/**
 * @swagger
 * /subscribed_channel_list:
 *   get:
 *     summary: List of all subscribes and Addon channels of a user
 *     description: List of all subscribes and Addon channels of a user 
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Data
 *         content:
 *           application/json:
 *             example:
 *               data: []
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid Token
 */
router.get("/subscribed_channel_list", makeCallback(listSubscriptionController));

/**
 * @swagger
 * /create_subscription:
 *   post:
 *     summary: Subscrib a channel / Addon a new channel
 *     description: Subscrib a channel / Addon a new channel
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fkPackageId:
 *                 type: number
 *                 example: 1
 *               fkChannelId:
 *                 type: number
 *                 example: null
 *               strSubcriptionType:
 *                 type:string
 *                 example:Annual Plan
 *     responses:
 *       200:
 *         description: Successfully Subscribed
 *         content:
 *           application/json:
 *             example:
 *               message: Successfully Subscribed
 *               data: your-access-token
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid Token
 */
router.post("/create_subscription", makeCallback(createSubscriptionController));


export default router;
