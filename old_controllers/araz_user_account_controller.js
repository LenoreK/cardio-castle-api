// // DEPENDENCIES
// const userAccounts = require('express').Router()
// const db = require('../models')
// const { User_Account, Multi_Week_Goal, Goal_Week, Goal_Day } = db
// const { Op } = require('sequelize')

// // FIND ALL USER_ACCOUNT
// userAccounts.get('/', async (req, res) => {
//     try {
//         const foundItem = await User_Account.findAll()
//         res.status(200).json(foundItem)
//     } catch (error) {
//         res.status(500).json(error)
//     }
//   })

// // FIND A SPECIFIC USER_ACCOUNT
// userAccounts.get('/:name', async (req, res) => {
//     try {
//         var _name = req.params.name ? req.params.name : '';
//         console.log( `%${_name}%`)
//         const foundBand = await User_Account.findOne({
//             where: 
//                 { 
//                     name: { [Op.like]: `%${_name}%` }
//                 }            
//         })
//         res.status(200).json(foundBand)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// // CREATE A USER_ACCOUNT
// userAccounts.post('/', async (req, res) => {
//     try {
//         const newItem = await User_Account.create(req.body)
//         res.status(200).json({
//             message: 'Successfully inserted a new USER ACCOUNT',
//             data: newItem
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

// // UPDATE A USER_ACCOUNT
// userAccounts.put('/:id', async (req, res) => {
//     try {
//         const updatedItems = await User_Account.update(req.body, {
//             where: 
//                 {
//                     id: req.params.id
//                 }
//         })
//         res.status(200).json({
//             message: `Successfully updated ${updatedItems} band(s)`
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

// // DELETE A USER_ACCOUNT
// userAccounts.delete('/:id', async (req, res) => {
//     try {
//         const deletedItems = await User_Account.destroy({
//             where:
//                 {
//                     id: req.params.id
//                 }
//         })
//         res.status(200).json({
//             message: `Successfully deleted ${deletedItems} band(s)`
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })


// // EXPORT
// module.exports = userAccounts
