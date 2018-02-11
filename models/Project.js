const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Create Schema

var member = {
    firstName: String,
    lastName: String
}

var contact = {
    email: String,
    phone: String
}

var ProjectSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required: true
    },
    members: [
        member
    ],
    module:{
        type:String,
        required:true
    },
    contact:[
        contact
    ],
    comments:{
        type: String
    }},{collection:"projects"}
)

mongoose.model('projects',ProjectSchema)