var express=require('express')
const app3=express();
// app3.get("/",function(req,res){
// res.send("welcome to xyz company")
// })

app3.listen(8282,function(req,res){
    console.log("Server listening........")
})
// app3.get("/emp",function(req,res){
//     res.send("Employee details")
// })
// app3.get("/prd",function(req,res){
//     res.send("product details..")
// })
// app3.get("/ab?cd",function(req,res){
//     res.send("abcd")
// })
// app3.get("/ae+cd",function(req,res){
//     res.send("aecd")
// })
// app3.get("/ab*cd",function(req,res){
//     res.send("ab*cd")
// })
// app3.get("/ab(cd)?e",function(req,res){
//     res.send("cd can present or not")
// })
// app3.get(/a/,function(req,res){
//     res.send("/a/")
// })
// app3.get(/.*fly/,function(req,res){
//     res.send("End with fly")
// })
// app3.get("/emp/:eid",function(req,res){
//     res.send("Employee id"+req.params.eid);
// })
// app3.get("/books/poems",function(req,res){
//     res.send("<html><head></head><body><h1>poems</h1></body></html>")
//     res.send("malayalam poems")
//})
app3.get("/",function(req,res){
    res.sendfile(__dirname+"/src/view/home.html")
})
app3.get("/emp",function(req,res){
    res.sendfile(__dirname+"/src/view/emp.html")
})
app3.get("/prd",function(req,res){
    res.sendfile(__dirname+"/src/view/prd.html")
})
app3.get("/emp/pemp",function(req,res){
    res.sendfile(__dirname+"/src/view/pemp.html")
})
app3.get("/emp/demp",function(req,res){
    res.sendFile(__dirname+"/src/view/demp.html")
})
app3.get("/emp/pemp/:id",function(req,res){
      res.send("Selected employee is"+req.params.id);
})
app3.get("/prd/wprd",function(req,res){
    res.sendFile(__dirname+"/src/view/wprd.html")
})
app3.get("/prd/rprd",function(req,res){
    res.sendFile(__dirname+"/src/view/rprd.html")
})
app3.get("/prd/wprd/:id",function(req,res){
    res.send("Selected product id is"+req.params.id);
})