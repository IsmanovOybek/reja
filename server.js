const http = require('http');
const mongodb = require("mongodb")

let db;
const connectionString = "mongodb+srv://hoji1993:hoji1993%3C@cluster0.xeiqfvj.mongodb.net/Reja";

mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err)
        console.log("Error on connection MongoDb");
    else {
        console.log("muofaqiyatli ulandi");
        module.exports = client;


        const app = require('./app');
        const server = http.createServer(app)
        let PORT = 4012;
        server.listen(PORT, function () {
            console.log(`the server is running successfully on port: ${PORT}, http://localhost:${PORT}`);

        });
    }

}
)

