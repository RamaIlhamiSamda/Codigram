const bcrypt = require('bcrypt')
const salt = +process.env.SALT || 5;

const encryptPassword = (data)=>{
    return(
        bcrypt.hashSync(String(data),salt)
    )
}
const decryptPassword =(data,blurPassword)=>{
    return(
        bcrypt.compareSync(data,blurPassword)
    )
}

module.exports = {encryptPassword,decryptPassword}