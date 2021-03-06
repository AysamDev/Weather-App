const express = require('express')
const axios = require('axios')
const router = express.Router()
const path = require('path')


router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.use(express.static(path.join(__dirname, 'dist')))
router.use(express.static(path.join(__dirname, 'node_modules')))
const City = require('../models/City')

router.get("/city/:cityName",async(req,res)=>
{
    const cityName = req.params.cityName
    const apiKey = "fd53646163dc207e48732d2ffd54f647"
    const cityRequest = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
   const response = await axios.get(cityRequest)
   res.send(response.data) 
})

router.get("/cities",async(req,res)=>
{
   const response = await City.find()
   res.send(response) 
})


router.post("/city",async(req,res)=>
{
   let city =  new City(req.body)
   const save = await city.save()   
   res.send("new city was added successfully") 
})

router.delete("/city/:cityName",async(req,res)=>
{
   let city =  req.params.cityName
   const save = await City.findOneAndDelete({
      name: city
   })
   res.send(`the city was deleted successfully:
    ${save}`)
})

module.exports = router