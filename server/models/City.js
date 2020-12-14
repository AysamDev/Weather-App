const mongoose = require('mongoose')
mongoose.connect(process.env.URL ||'mongodb://localhost/Weather', { useNewUrlParser: true })

const Schema = mongoose.Schema

const citySchema = new Schema({
    name: String,
    temperature: Number,
    condition: String,
    conditionPic: String
})

const City = mongoose.model("cities", citySchema)
module.exports = City