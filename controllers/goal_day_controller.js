// DEPENDENCIES
const goalDay = require('express').Router()
const db = require('../models')
const { User_Account, Multi_Week_Goal, Goal_Week, Goal_Day  } = db
const { Op } = require('sequelize')

// FIND GOAL_DAY
goalDay.get('/', async (req, res) => {
    try {
        const foundItem = await Goal_Day.findAll()
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
  })

// FIND SPECIFIC GOAL_DAY
goalDay.get('/:name', async (req, res) => {
    try {
        var _name = req.params.name ? req.params.name : '';
        console.log( `%${_name}%`)
        const foundItem = await Goal_Day.findOne({
            where: 
                { 
                    name: { [Op.like]: `%${_name}%` }
                }            
        })
        res.status(200).json(foundBand)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A GOAL_DAY
goalDay.post('/', async (req, res) => {
    try {
        const newItem = await Goal_Day.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new Goal Day',
            data: newItem
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE GOAL_DAY
goalDay.put('/:id', async (req, res) => {
    try {
        const updatedItems = await Goal_Day.update(req.body, {
            where: 
                {
                    id: req.params.id
                }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedItems} goal_day (s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE GOAL_DAY
goalDay.delete('/:id', async (req, res) => {
    try {
        const deletedItems = await Goal_Day.destroy({
            where:
                {
                    id: req.params.id
                }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedItems} goal_day (s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = goalDay