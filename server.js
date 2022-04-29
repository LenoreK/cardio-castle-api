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
// const bandsController = require('./controllers/bands_controller')
// app.use('/bands', bandsController)

// CONTROLLERS 
// const eventsController = require('./controllers/events_controller')
// app.use('/events', eventsController)

// CONTROLLERS 
// const stagesController = require('./controllers/stages_controller')
// app.use('/stages', stagesController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`:o> running on port: ${process.env.PORT}`)
})