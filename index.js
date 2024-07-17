const express =require("express");

 const app =express();

 app.get("/",function(req,res){
    res.send("Sachal");
 });

 app.listen(3000,function(){
    console.log("SERVER SA")
 })