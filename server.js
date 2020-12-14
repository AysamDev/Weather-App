const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const api = require('./server/routes/api')
const port = 4200 
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.use('/',api)


app.listen(process.env.PORT || port, function () {
    console.log(`Server running on ${port}`)
})