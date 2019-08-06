var express=require('express')//calling express module
const app1=express();
app1.get("/",function(req,res){
    res.send("welcome to node server")
})


app1.listen(8052,function(req,res){
    console.log("server started listening.....");
})
app1.get("/books",function(req,res){
    res.send("books")
})
app1.get("/author",function(re,res){
    res.send("author detils...")

})