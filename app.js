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
    //console.log(req.body)
    //res.send("DONE")

    var temp = []

    for(var count = 0;count<req.body.firstName.length;count++) {
        temp.push( {
            firstName: req.body.firstName[count],
            lastName: req.body.lastName[count]
        })
    }

    //console.log(temp)

    
    var newProject = {
        name: req.body.name,
        description: req.body.description,
        members: temp,
        module: req.body.module,
        contact:{
            email:req.body.email,
            phone:req.body.phone
        },
        comments: req.body.comments
    }

    console.log(newProject)

    
    
    new Project(newProject)
        .save()
        .then(project => {
            res.send("Project Saved")
        })
        .catch((err)=>{
            console.log(err)
            res.send("Error occured")
        })
        
       //res.send("DONE")
})

const port = 5252
// Listen to the port
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})