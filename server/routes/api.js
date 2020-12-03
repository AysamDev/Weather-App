const express = require('express')
const axios = require('axios')
const router = express.Router()
const path = require('path')


router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.use(express.static(path.join(__dirname, 'dist')))
router.use(express.static(path.join(__dirname, 'node_modules')))
const City = require('../models/City')

router.get("/city/:city",async(req,res)=>
{
    const cityName = req.params.city
    const apiKey = "fd53646163dc207e48732d2ffd54f647"
    const cityRequest = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
   const response = await axios.get(cityRequest)
   console.log(response.data)
   res.send(response.data) 
})

router.get("/cities",async(req,res)=>
{
   const response = await City.find()
   console.log(response)
   res.send(response) 
})


router.post("/city",async(req,res)=>
{
   const city =  req.body
   
   const response = await City.find()
   console.log(response)
   res.send(response) 
})

module.exports = router