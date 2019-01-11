var express=require('express')
var app=express()
app.get("/",function(req,res){
    res.send("Express here!!!")
})
app.listen(5555)