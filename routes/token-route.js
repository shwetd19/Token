const express = require("express");
const router = express.Router();
const tokenController = require("../controller/token-controller"); // Adjust the path accordingly

// Route to add a new token
/**
 * @description addToken
 * @method POST /addToken
 */
router.post("/addToken", tokenController.addToken);

// Route to add a fetch the token
/**
 * @description getTokens
 * @method GET /api/getTokens
 */
router.get('/getTokens', tokenController.getTokens);

module.exports = router;
