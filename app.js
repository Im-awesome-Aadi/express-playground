var express = require('express');
var app =  express();

var port = process.env.PORT || 3000


app.get('/', (req,res)=>{
    res.send("hello World");
});
app.get('/user/:id', (req,res)=>{
    res.send("hello World " + req.params.id);
});
app.listen(port);