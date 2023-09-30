const router = require("express").Router();
const UserControllers = require("../controllers/UserControllers.js");
const { check } = require('express-validator');



const validation = [
  check('login', 'Invalid Login').isLength({ min: 5, max: 20 }),
  check('password', 'Invalid Password').isLength({ min: 5, max: 22 })
]



/**
 * @swagger
 * /api/authorization/login:
 *   post:
 *     summary: Check authorization
 *     description: LogIn user
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User is authorized
 *       '401':
 *         description: Forbidden
 */

router.post("/login", validation, UserControllers.login)


/**
 * @swagger
 * /api/authorization/register:
 *   post:
 *     summary: If user are not authorized, he need to register
 *     description: User's registration
 *     tags: [Authorization]
 *     requestBody:
 *       description: test
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Seccess registration
 *       '400':
 *         description: Bad Request
 */

router.post("/register", validation, UserControllers.register);



module.exports = router;