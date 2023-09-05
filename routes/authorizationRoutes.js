const router = require("express").Router();
const UserControllers = require("../controllers/UserControllers.js");
const { check, validationResult } = require('express-validator');



const validation = [
  check('login', 'Invalid Login').isLength({ min: 5, max: 12 }),
  check('password', 'Invalid Password').isLength({ min: 6, max: 20 })
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

router.post("/login", validation, async (req, res) => {
  try {

    const { login, password } = req.body;
    UserControllers.login( login, password ).then(( token ) => {
      if ( token === null ) {
        res.status(400).json("invalid token")
      } else {
        res.send( token );
      }
    });

  } catch ( error ) {
    res.json( error );
  }
});


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

router.post("/register", validation, async (req, res) => {
  try {

    validationResult( req ).throw();
    const { login, password } = req.body;
    UserControllers.register(login, password).then(( createdUser ) => {    
      if ( createdUser === null ) {
        res.sendStatus(400);
      } else {
        res.send( createdUser );
      }
    });

  } catch (error) {
    res.json(error);
  };
});

module.exports = router;
