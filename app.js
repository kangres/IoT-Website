const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'kangres')));

// Route for root
app.get('/',(req,res)=>{
    res.redirect('kangres/index.html')
})

const port = 5252
// Listen to the port
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})