// DEPENDENCIES
const express = require('express')
//const Sequelize = require('sequelize');
const app = express()
var cors = require('cors')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'You ran into the Cardio Castle API ;o)'
    })
})

// CONTROLLERS 
const usersController = require('./controllers/user_account_controller')
app.use('/users', usersController)

const goalWeekController = require('./controllers/goal_week_controller')
app.use('/goalWeeks', goalWeekController)
 
// const stagesController = require('./controllers/stages_controller')
// app.use('/stages', stagesController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`:o> running on port: ${process.env.PORT}`)
})