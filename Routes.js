const url = require("url");
const fs = require("fs")




const Routeshandle=(req,res)=>{
    const urlpath = req.url


    const change=(a)=>{
        alert(a)
    }

    if(urlpath=== "/"){
        fs.readFile("./home.html", (err, data)=>{
            res.setHeader("Content-Type","text/html")
            res.statusCode=200,
            res.write(data);
            res.end()
        })
    }
    else if(urlpath=== "/about"){
           fs.readFile("./about.html", (err, data)=>{
            res.setHeader("Content-Type","text/html")
            res.statusCode=200,
            res.write(data)
            res.end();
        })
    }
    else if(urlpath === "/contact"){
        fs.readFile("./contact.html", (err, data)=>{
            res.setHeader("Content-Type","text/html")
            res.statusCode=200,
            res.write(data)
            res.end();
        })
    }
    else{
        fs.readFile("./404.html", (err, data)=>{
            res.setHeader("Content-Type","text/html")
            res.statusCode=404,
            res.write(data)
            res.end();
        })
    }
}
module.exports={handle:Routeshandle}