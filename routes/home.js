let express = require('express');
const { home, registro, login, profile } = require('../controllers/homeControllers');
const { registerUser, loginUser,logout, updateUserData, deleteAcount } = require('../controllers/authControllers');
let router = express.Router()

router.get("/", home);
router.get("/signup", registro);
router.post("/signup",registerUser)
router.get("/login", login);
router.post("/login", loginUser)
router.get("/logout", logout)
router.get("/profile", profile)
router.post("/profile", updateUserData)
router.get("/delete", deleteAcount)
module.exports = router