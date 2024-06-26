import express from "express"
const {gethomePage ,vipPro } = require('../controllers/homeController')
const router = express.Router();


router.get('/', gethomePage)

router.get('/88vipPro',vipPro)



module.exports = router