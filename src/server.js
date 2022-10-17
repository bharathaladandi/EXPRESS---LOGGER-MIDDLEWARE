const express = require('express');
const morgan = require('morgan');


const port = 8000;


app.use(morgan(":method :url HTTP/:http-version :status :res[content-length] - :response-time ms :date[web]:type"))


app.get("/", (req, res) => {
    res.send("Home Page");
})


app.get("/about", (req, res) => {
    res.send("About Page");
})

const app = express();


app.listen(port, (req, res) => {
    console.log(`listening on http://localhost:${port}`);
});