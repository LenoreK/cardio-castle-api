// DEPENDENCIES
const user_account = require('express').Router()
const db = require('../models')
const { id, user_name, password, last_modified, last_modified_by } = db
const { Op } = require('sequelize')
const userAccounts = require('./araz_user_account_controller')

// FIND ALL USER_ACCOUNT
userAccounts.get('/', async (req, res) => {
    try {
        const foundItem = await User_Account.findAll()
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
  })

// CREATE USER_ACCOUNT
bands.post('/', async (req, res) => {
    try {
        const newUser_account = await user_account.create(req.body)
        res.status(200).json({
            message: 'New account Created',
            data: newUser_account
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE USER ACCOUNT
user_account.put('/:id', async (req, res) => {
    try {
        const updatedUser_Account = await user_account.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedBands} band(s)`
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
            message: `Successfully deleted ${deletedItems} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = userAccounts
