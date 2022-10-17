const express = require('express');



const port = 5000;




const app = express();


app.listen(port, (req, res) => {
    console.log(`listening on http://localhost:${port}`);
});