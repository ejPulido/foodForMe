let express = require('express');
const { home, registro, login } = require('../controllers/homeControllers');
const { registerUser, loginUser } = require('../controllers/authControllers');
let router = express.Router()

router.get("/", home);
router.get("/signup", registro);
router.post("/signup",registerUser)
router.get("/login", login);
router.post("/login", loginUser)

module.exports = router