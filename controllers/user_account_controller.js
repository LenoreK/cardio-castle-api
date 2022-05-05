// DEPENDENCIES
const userAccounts = require('express').Router()
const db = require('../models')
const { User_Account, multi_week_goal, goal_week, goal_day } = db
const { Op } = require('sequelize')

// FIND ALL USER ACCOUNTS
userAccounts.get('/', async (req, res) => {
    try {
        const foundItem = await User_Account.findAll()
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
  })

// FIND A SPECIFIC USER ACCOUNT
userAccounts.get('/:name', async (req, res) => {
    try {
        var _name = req.params.name ? req.params.name : '';
        console.log( `%${_name}%`)
        const foundItem = await User_Account.findOne({
            where: 
                { 
                    user_name: { [Op.like]: `%${_name}%` }
                }            
        })
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE USER ACCOUNT
userAccounts.post('/', async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        const newUserAccount = await User_Account.create(req.body)
        res.status(200).json({
            message: 'New account Created',
            data: newUserAccount
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE USER ACCOUNT
userAccounts.put('/:id', async (req, res) => {
    try {
        const updatedItems = await User_Account.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedItems} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A USER ACCOUNT
userAccounts.delete('/:id', async (req, res) => {
    try {
        const deletedItems = await User_Account.destroy({
            where:
                {
                    id: req.params.id
                }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedItems} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = userAccounts
