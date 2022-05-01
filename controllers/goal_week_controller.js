// DEPENDENCIES
const  goalWeek = require('express').Router()
const db = require('../models')
const { User_Account, Multi_Week_Goal, Goal_Week, Goal_Day  } = db
const { Op } = require('sequelize')

// FIND ALL Weekly Goals
goalWeek.get('/', async (req, res) => {
    try {
        const foundItem = await Goal_Week.findAll()
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
  })

// FIND A Current Weekly Goal
goalWeek.get('/:goalName/:weekNumber', async (req, res) => {
    try {
        var _name = req.params.name ? req.params.name : '';
        console.log( `%${_name}%`)
        const foundItem = await Multi_Week_Goal.findOne({
            where: {
                [Op.and]: [
                    {goal_name: { [Op.like]: `%${_name}%` }}
                    ,{goal_status: 1}
                ]
            },
            include: {
                model: Goal_Week
                , as: "goal_weeks"
                , where: {goal_week_number:req.params.weekNumber}
                , include: {
                    model: Goal_Day
                    , as: "goal_days"                    
                }
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
        const newItem = await Goal_Week.create(req.body)
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
        const updatedItems = await Goal_Week.update(req.body, {
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
        const deletedItems = await Goal_Week.destroy({
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
module.exports = goalWeek