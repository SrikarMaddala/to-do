const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine" , 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

var items = ["Eat" , "code" , "no sleep"];

workItems = [];

app.get("/" , function(req, res){
    var today = new Date();
    var options = {
        weekday: 'long',
        day : 'numeric',
        month : 'long'
    };

    var day = today.toLocaleDateString("en-US" , options);
    res.render("list" , { listtitle : day , newlistitems: items }); // key value 
});
// need to have a views folder

app.listen(3000, function(){
    console.log("server is running on port 3000")
})

app.post("/" , function(req , res){
    var item = req.body.newitem;
    if(req.body.list = "work"){
        workItems.push(item);
        res.redirect("/work") // if not keep on rotating
        }else{
        items.push(item);
        console.log(item);
        res.redirect("/");
    }

});

app.get("/work", function(req,res){
    res.render("list" , {listtitle : "work List" , newlistitems: workItems  })
});  

app.post("/work" , function(req,res){
    let item = req.body.newitem;
    workItems.push(item);
    res.redirect("/work");
})