let express = require('express');
const { registro } = require('../controllers/authControllers');
let router = express.Router()

router.get("/", registro);


module.exports = router