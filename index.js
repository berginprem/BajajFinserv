const express = require("express");
const app = express();

app.get('/asd', (req, res) => {
    res.send('MEOW!!')
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})
module.exports = app;
