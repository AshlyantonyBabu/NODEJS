var express=require('express')//calling express module
const app1=express();
app1.get("/",function(req,res){
    res.send("welcome to node server")
})


app1.listen(8052,function(req,res){
    console.log("server started listening.....");
})