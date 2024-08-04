const express = require('express')
const { authenticate } = require('../middlewares/auth/authenticate')
const { authorize } = require('../middlewares/auth/authorize')
const { getAllQuizz, createQuizz, updateQuizz, deleteQuizz, getDetailQuizz } = require('../controllers/quizz.controller')
const quizzRouter = express.Router()

quizzRouter.post('/',authenticate, authorize(['admin', 'super_admin']),createQuizz)
quizzRouter.get('/', getAllQuizz)
quizzRouter.get("/:id", getDetailQuizz)
quizzRouter.put("/:id", authenticate, authorize(['admin', 'super_admin']),  updateQuizz)
quizzRouter.delete("/:id", authenticate, authorize(['admin', 'super_admin']),  deleteQuizz)

module.exports = { quizzRouter }