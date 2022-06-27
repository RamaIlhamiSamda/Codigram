const { Router } = require('express')
const postingRoute = Router()
const { postingController } = require('../controller')
const { authentication } = require('../middlewares/auth')


postingRoute.get('/',postingController.getPosting)
postingRoute.post('/create',postingController.create)
postingRoute.delete('/delete/:id',postingController.deletePosting)


module.exports = postingRoute