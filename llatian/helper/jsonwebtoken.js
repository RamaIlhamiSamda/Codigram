const jwt = require ('jsonwebtoken')
const secretCode = process.env.SECRET_CODE || 'bebas'

const tokenGenerator = (data)=>{
    const {id,name,email} = data
    return jwt.sign({
        id,name,email
    },secretCode)
}
const verifyGenerator = (data)=>{
    return jwt.verify(data,secretCode)
}

module.exports = {
    tokenGenerator,verifyGenerator
}