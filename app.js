const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine" , 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

var items = [];

app.get("/" , function(req, res){
    
    var today = new Date();
    var options = {
        weekday: 'long',
        day : 'numeric',
        month : 'long'
    };

    var day = today.toLocaleDateString("en-US" , options);
    res.render("list" , { kindofday : day , newlistitems: items }); // key value 
});
// need to have a views folder

app.listen(3000, function(){
    console.log("server is running on port 3000")
})

app.post("/" , function(req , res){
    var item = req.body.newitem;
    items.push(item);
    console.log(item);

    res.redirect("/");
})
