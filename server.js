console.log("web serverni boshlash");
const express = require('express')
const app = express();
const http = require('http');

//1 kriw kodi
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 session kod
//3 views kodi
app.set('views', 'views');
app.set('view engine', 'ejs');

//4 routing kod
app.get("/hello", function (req, res) {
    res.send(`<h1 style="background:red">Hello world </h1>`);
})
app.get("/gift", function (req, res) {
    res.send(`Siz sovgala bolimidasz`);
})
const server = http.createServer(app)
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`the server is running successfully on port: ${PORT}`);

});