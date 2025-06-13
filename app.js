console.log("web serverni boshlash");
const express = require('express')
const res = require("express/lib/response")
const app = express();
const fs = require('fs')

//mongo db caqriw
const db = require("./server").db()
const mongodb = require("mongodb")


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
    console.log("user entered / create-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0])

    })
})
// delete qism
app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(id) },
        function (err, data) {
            res.json({ state: "sucsess" });
        }
    )
});

// edit oper
app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input } },
        function (err, data) {
            res.json({ state: "success" })
        })

})


//hammasini ochiriw
app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "hammasi uchib ketsinmi" })
        });
    }
})

app.get("/author", (req, res) => {
    res.render(`author`, { user: user });
})

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans")
        .find()
        .toArray((err, data) => { // <-- err bu yerda to‘g‘ri ishlatiladi
            if (err) {
                console.log("Xatolik:", err);
                res.send("MongoDB bilan boglanishda xatolik");
            } else {
                res.render("reja", { items: data });
            }
        });
});


module.exports = app;
