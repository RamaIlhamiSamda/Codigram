const { Router } = require('express')
const userRoute = Router()
const { userController } = require('../controller')
const { authentication } = require('../middlewares/auth')


userRoute.get('/',authentication,userController.getUser)
userRoute.post('/create',userController.create)
userRoute.post('/login',userController.login)
userRoute.post('/loginUser',userController.userLogin)
userRoute.delete('/delete/:id',userController.deleteUser)
userRoute.put('/update/:id',userController.update)
userRoute.get('/information/:id',userController.getUserById)

module.exports = userRoute
