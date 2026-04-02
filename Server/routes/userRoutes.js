const express = require("express")
const userController = require('../controller/userController')
const { verifyAuth } = require("../middlewares/auth")


const router = express.Router()

//routes 
// router.use(verifyAuth)

router.post("/register", userController.registerUser)
router.post("/login", userController.login);
router.get("/get/me", verifyAuth, userController.getCurrentUser);


module.exports = router;