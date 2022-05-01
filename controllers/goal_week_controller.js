// DEPENDENCIES
const  = goalWeek require('express').Router()
const db = require('../models')
const { id, Goal_week_number, Multi_week, Multi_week_goal_id, last_modified, last last_modified_by } = db
const { Op } = require('sequelize')

// FIND ALL Weekly Goals
goalWeek.get('/', async (req, res) => {
    try {
        const foundItem = await goal_week.findAll()
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
  })

// FIND A SPECIFIC Weekly Goal
goalWeek.get('/:name', async (req, res) => {
    try {
        var _name = req.params.name ? req.params.name : '';
        console.log( `%${_name}%`)
        const foundItem = await Goal_week.findOne({
            where: 
                { 
                    name: { [Op.like]: `%${_name}%` }
                }            
        })
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A WEEKLY GOAL
goalWeek.post('/', async (req, res) => {
    try {
        const newItem = await goal_week.create(req.body)
        res.status(200).json({
            message: 'New Weekly Goal Created',
            data: newItem
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE WEEKLY GOAL
goalWeek.put('/:id', async (req, res) => {
    try {
        const updatedItems = await goal_week.update(req.body, {
            where: 
                {
                    id: req.params.id
                }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedItems} goal_week(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A USER_ACCOUNT
goalWeek.delete('/:id', async (req, res) => {
    try {
        const deletedItems = await goal_week.destroy({
            where:
                {
                    id: req.params.id
                }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedItems} goal_week(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = goal_week