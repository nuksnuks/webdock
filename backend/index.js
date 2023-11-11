var express = require("express");

var app = express();

app.get('/', (req, res) => {
    res.json("this is backend")
});




//server kører på port 
app.listen(3301, ()=>{
    console.log("backend kører på http://localhost:3301/")
});