const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Create Schema

const ProjectSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required: true
    },
    comments:{
        type: String
    }
})

mongoose.model('projects',ProjectSchema)