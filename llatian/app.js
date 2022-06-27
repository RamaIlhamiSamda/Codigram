const express = require('express')
const app = express()
const port = process.env.PORT||3000
const multer = require('multer')
const cors = require('cors')
const path = require("path")
const bodyParser = require('body-parser')

const fileStorageEngine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../interface/src/image')
    },
    filename:(req,file,cb)=>{
        cb(null,path.parse(file.originalname).name + "-"+Date.now()+path.extname(file.originalname))
    }
})

const fileFilter = (req,file,cb)=>{
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}

const upload = multer({ storage :fileStorageEngine})
// app.post("/posting/create",upload.single("photo"),(req,res)=>{
//     res.json({status : "success",image : finalImageURL})
// })

app.use(multer({storage:fileStorageEngine, fileFilter:fileFilter}).single('image'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join('../interface/src/image')))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(express.static(__dirname + './public'))


const route = require('./routes')
app.use(route)

app.listen(port,()=>{
    console.log(`app is listening on ${port}`)
})

