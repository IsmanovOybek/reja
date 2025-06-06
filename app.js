console.log("web serverni boshlash");
const express = require('express')
const res = require("express/lib/response")
const app = express();
const fs = require('fs')

//mongo db caqriw
const db = require("./server").db()


let user;
fs.readFile("detabase/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("error", err);
    } else {
        user = JSON.parse(data)
    }
})

//1 kriw kodi
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//2 session kod
//3 views kodi
app.set('views', 'views');
app.set('view engine', 'ejs');

//4 routing kod
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" })
})

app.get("/author", (req, res) => {
    res.render(`author`, { user: user });
})

app.get("/", function (req, res) {
    res.render(`reja`);
})


module.exports = app;
