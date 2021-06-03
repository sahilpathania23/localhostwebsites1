const express=require("express");
const bodyparser=require("body-parser");

const app=express();
app.use(bodyparser.urlencoded({extended: true}));


// this below is home route with "/"
app.get("/",function(req,res){
  res.sendfile(__dirname +"/index.html");

});

app.post("/",function(req,res){
  var num1=Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result=num1+num2;


  res.send("the result of two number is "+result);
});

app.listen(3000,function(){
  console.log("server is also listening");
});
