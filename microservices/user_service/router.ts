import express from "express";
import { makeCallback } from "../../libs/core/helpers/makeController";
import { userCreateController,loginUserController } from "../../libs/user/controller";
let router = express.Router();

/**
 * @swagger
 * /create_user:
 *   post:
 *     summary: User Creation
 *     description: Create a New User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               strUserName:
 *                 type: string
 *                 example: NewUser
 *               strUserType:
 *                 type: string
 *                 example: user
 *               strPassword:
 *                 type: string
 *                 example: 12345678
 *     responses:
 *       200:
 *         description: Successfully Created
 *         content:
 *           application/json:
 *             example:
 *               message: Login successful
 *               accessToken: your-access-token
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid credentials
 */
router.post("/create_user", makeCallback(userCreateController));

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Authenticate a user and get an access token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               strUserName:
 *                 type: string
 *                 example: Abdu
 *               strPassword:
 *                 type: string
 *                 example: 12345678
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             example:
 *               message: Login successful
 *               accessToken: your-access-token
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid credentials
 */
router.post("/login", makeCallback(loginUserController));

export default router;
