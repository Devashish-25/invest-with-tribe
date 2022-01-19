const express = require("express");
const mongoose = require('mongoose');
const routes = require('./src/routers');

mongoose.connect('mongodb+srv://assignment:assignment@cluster0.xghn3.mongodb.net/Assignment?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

const app = express();

app.use(express.json());

app.use('/', routes);

app.get('/health', (req, res) => {
    res.status(200).send("working");
})

app.listen(3000, () => {
    console.log("server started on port 3000");
})