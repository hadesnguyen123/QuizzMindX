const express = require('express');
const { User } = require('../models');
const { register, login } = require('../controllers/user.controller');

const userRouter = express.Router()

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.post("/", login)


module.exports = {
    userRouter
}