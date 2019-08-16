const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const postRoutes = require("./routes/postRoutes");
const userAuth = require('./routes/auth')
const mongoose = require('mongoose')

const app = express();


mongoose.connect('mongodb://localhost/littleford', { useNewUrlParser: true, useCreateIndex: true }).then(() => console.log("connected to the database "))
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("we are connected !")
})
app.use('/images', express.static(path.join('backend/images')));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,Authorization");
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS,PUT');
    next();
});


app.use("/posts", postRoutes);
app.use("/users", userAuth);



module.exports = app;