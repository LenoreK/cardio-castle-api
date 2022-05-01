
// DEPENDENCIES
const multi_week_goal = require('express').Router()
const db = require('../models')
const { ID, goal_name, last_modified, last_modified_by } = db
const { Op } = require('sequelize')
const meetGreet = require('../models/multi_week_goal')

// FIND ALL Weekly Goals
multi_week_goal.get('/', async (req, res) => {
    try {
        const foundItem = await Band.findAll()
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
  })

// FIND A SPECIFIC Goal
multi_week_goal.get('/:name', async (req, res) => {
    try {
        var _name = req.params.name ? req.params.name : '';
        console.log( `%${_name}%`)
        const foundBand = await multi_week_goal.findOne({
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

// CREATE A MULTI WEEK GOAL
multi_week_goal.post('/', async (req, res) => {
    try {
        const newItem = await multi_week_goal.create(req.body)
        res.status(200).json({
            message: 'New Weekly Goal Created',
            data: newItem
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A UPDATE A MULTI WEEK GOAL
multi_week_goal.put('/:id', async (req, res) => {
    try {
        const updatedItems = await multi_week_goal.update(req.body, {
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedBands} multi week goal(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A MULTI WEEK GOAL
multi_week_goal.delete('/:id', async (req, res) => {
    try {
        const deletedItems = await multi_week_goal.destroy({
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedBands} multi week goal(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = multi_week_goal
