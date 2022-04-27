// DEPENDENCIES
const user_account = require('express').Router()
const db = require('../models')
const { id, user_name, password, last_modified, last_modified_by } = db
const { Op } = require('sequelize')


// CREATE USER_ACCOUNT
bands.post('/', async (req, res) => {
    try {
        const newUser_account = await user_account.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newUser_account
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = user_account
