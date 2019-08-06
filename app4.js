var ex=require('express')
const app=ex();
var booklist=[{name:"book1",Author:"author1",price:"price1"},{name:"book2",Author:"author2",price:"price2"},{name:"book3",Author:"author3",price:"price3"}]
app.set("view engine","ejs")
app.set("views","./src/view/LOgin/src/view")
var bdy=require('body-parser')
app.use(bdy.urlencoded({extended:true}));
app.listen("3444",function(req,res){
    console.log("server is ready")
})
app.get("/",function(req,res){
//res.sendFile(__dirname+"/src/view/LOgin/src/view/lg.html")
res.render("lg")
})
app.post("/home",function(req,res){
    var user=req.body.uname;
    var pass=req.body.pname
    console.log(req.body.uname);
    console.log(req.body.pname);
    if(pass=="pass@123")
    {
       // res.sendFile(__dirname+"/src/view/LOgin/src/view/home.html")
       res.render("home",{username:user})

    }
    else{
        res.redirect("/")
    }
    //console.log(req.body.uname);
    
    
    })
    app.get("/book",function(req,res){
        res.render("book",{bookls:booklist});
    })