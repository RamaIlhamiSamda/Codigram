const express = require('express')
const route = express.Router()


route.get("/",(req,res)=>{
    res.status(200).json({
        message : "dashboard api"
    })
})

const userRoute = require('./user')

const postingRoute = require('./posting')

route.use('/user',userRoute)
route.use('/posting',postingRoute)


module.exports = route