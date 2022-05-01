// DEPENDENCIES
const express = require('express')
//const Sequelize = require('sequelize');
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'You ran into the Cardio Castle API ;o)'
    })
})

// CONTROLLERS 
const usersController = require('./controllers/araz_user_account_controller')
app.use('/arazusers', usersController)

// const eventsController = require('./controllers/events_controller')
// app.use('/events', eventsController)
 
// const stagesController = require('./controllers/stages_controller')
// app.use('/stages', stagesController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`:o> running on port: ${process.env.PORT}`)
})