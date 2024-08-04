const { where, Op } = require('sequelize');
const { Station } = require('../models');
const { Quizz } = require('../models');

const createQuizz = async (req, res) => {
    const { title, questions, score, isPublic } = req.body;
    try {
        const quiz = await Quizz.create({
            title,
            questions,
            score,
            createdBy: req.user.id,
            isPublic,
        });
        console.log(quiz)
        res.status(201).json(quiz);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getAllQuizz = async (req, res) => {
    const { name } = req.query   //lấy sau ?  ví dụ như search
    try {
        if (name) {
            const quizzList = await Quizz.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            });
            res.status(200).send(quizzList)
        } else {
            const quizzList = await Quizz.findAll();
            res.status(200).send(quizzList)
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDetailQuizz = async (req, res) => {
    const { id } = req.params
    try {
        console.log(id)
        const detailQuizz = await Quizz.findOne({
            where: {
                id,
            }
        })
        res.status(200).send(detailQuizz)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateQuizz = async (req, res) => {
    
}

const deleteQuizz = async (req, res) => {
    const { id } = req.params
    try {
        await Quizz.destroy({
            where: {
                id
            }
        })
        res.status(200).send("Delete Sucessful")
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createQuizz,
    getAllQuizz,
    getDetailQuizz,
    updateQuizz,
    deleteQuizz
}