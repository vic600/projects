const express = require('express');
const app = express();
const router=express.Router();
var bodyParser = require('body-parser')
const request=require('request');
const projects=require('./routes/projects')(router);
const port = 3000



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use('/projects',projects);
app.get('*',(req,res)=>{
res.send({message:'404 page not found'})
})



app.listen(port, (err) => {
    if (err) {
        console.log('failed to connect to ' + port);
    } else {
        console.log('connected to ' + port);
    }

})