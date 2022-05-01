// DEPENDENCIES
const multiWeekGoal = require('express').Router()
const db = require('../models')
const { User_Account, Multi_Week_Goal, Goal_Week, Goal_Day  } = db
const { Op } = require('sequelize')

// FIND ALL Weekly Goals
multiWeekGoal.get('/', async (req, res) => {
    try {
        const foundItem = await Multi_Week_Goal.findAll()
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
  })

// FIND A SPECIFIC Goal
multiWeekGoal.get('/:name', async (req, res) => {
    try {
        var _name = req.params.name ? req.params.name : '';
        console.log( `%${_name}%`)
        const foundBand = await Multi_Week_Goal.findOne({
            where: 
                { 
                    goal_name: { [Op.like]: `%${_name}%` }
                }            
        })
        res.status(200).json(foundBand)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A MULTI WEEK GOAL
multiWeekGoal.post('/', async (req, res) => {
    try {
        const newItem = await Multi_Week_Goal.create(req.body)
        res.status(200).json({
            message: 'A new multi-week goal was created.',
            data: newItem
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A UPDATE A MULTI WEEK GOAL
multiWeekGoal.put('/:id', async (req, res) => {
    try {
        const updatedItems = await Multi_Week_Goal.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedItems} multi week goal(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A MULTI WEEK GOAL
multiWeekGoal.delete('/:id', async (req, res) => {
    try {
        const deletedItems = await Multi_Week_Goal.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedItems} multi week goal(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = multiWeekGoal
