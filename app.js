const express = require ("express");
const app = express();
const path = require ("path");
const port = 2020

app.listen(port,() => console.log("Server runing in http://localhost:"+ port));
app.use(express.static("public"));

app.get("/", (req,res) => res.sendFile(path.join(__dirname, "views","home.html")));
app.get("/register", (req,res) => res.sendFile(path.join(__dirname, "views","register.html")));
app.get("/login", (req,res) => res.sendFile(path.join(__dirname, "views","login.html")));
