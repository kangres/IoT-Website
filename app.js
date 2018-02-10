const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static(path.join(__dirname, 'kangres')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Connect to mongodb
mongoose.connect('mongodb://localhost/iot-website')
    .then(()=> console.log('MongoDB connected...'))
    .catch(err=>console.log(err))

    // Load Project Model
require('./models/Project')
const Project = mongoose.model('projects')



// Route for root
app.get('/',(req,res)=>{
    res.redirect('kangres/index.html')
})

app.post('/projects/add',(req,res)=>{
    new Project(req.body)
        .save()
        .then(project => {
            res.send("Project Saved")
        })
})

const port = 5252
// Listen to the port
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})