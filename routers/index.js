const express = require('express');
const { quizzRouter } = require('./quizz.router');
const { userRouter } = require('./user.router');
const rootRouter = express.Router()

rootRouter.use('/quizzs', quizzRouter)
rootRouter.use('/users', userRouter)

module.exports = rootRouter