const express =require("express");
const { register, login, logout } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const router=express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(authMiddleware,logout);
module.exports=router