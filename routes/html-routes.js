const router = require('express').Router();

var path = require("path");

    router.get("/exercise",function (req,res){   
        res.sendFile(path.join(__dirname,"../public/map.html"));
    });
  
    router.get("/",function(req,res){    
        res.sendFile(path.join(__dirname,"../public/index.html"));
    });
    module.exports = router;