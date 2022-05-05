
// DEPENDENCIES
const multiWweekGoals = require('express').Router()
const db = require('../models')
const { User_Account, Multi_Week_Goal, Goal_Week, Goal_Day  }  = db
const { Op } = require('sequelize')

// FIND ALL Weekly Goals
multiWweekGoals.get('/', async (req, res) => {
    try {
        const foundItem = await Multi_Week_Goal.findAll()
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
  })

// FIND the Current Goal for the user
multiWweekGoals.get('/:goalName', async (req, res) => {
    try {
        var _name = req.params.name ? req.params.name : '';
        var _userId = req.query.userId ? req.query.userId : 0;
        console.log( `%${_name}%`)
        const foundItem = await Multi_Week_Goal.findOne({
            where: {
                [Op.and]: [
                    {goal_name: { [Op.like]: `%${_name}%` }}
                    ,{goal_status: 1}
                    ,{user_account_id: _userId}
                ]
            },
            include: {
                model: Goal_Week
                , as: "goal_weeks"                
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

// CREATE A MULTI WEEK GOAL
multiWweekGoals.post('/', async (req, res) => {
    try {
        const newItem = await Multi_Week_Goal.create(req.body)
        res.status(200).json({
            message: 'New Weekly Goal Created',
            data: newItem
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A UPDATE A MULTI WEEK GOAL
multiWweekGoals.put('/:id', async (req, res) => {
    try {
        const updatedItems = await Multi_Week_Goal.update(req.body, {
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
multiWweekGoals.delete('/:id', async (req, res) => {
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
module.exports = multiWweekGoals
