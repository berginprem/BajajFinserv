const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.get('/bfhl', (req, res) => {
    ans = {operation_code : 1}
    res.send(ans)
})
app.post('/bfhl', (req, res) => {
    var jsonData= (req.body.data)
    console.log(jsonData)
    const numbers = [];
    const letters = [];
    
    for (let i = 0; i < jsonData.length; i++) {
        const element = jsonData[i];
        if (!isNaN(parseFloat(element))) {
          numbers.push(parseFloat(element));
        } else {
          letters.push(element);
        }
      }
    const data ={
        is_success : true,
        user_id:"Bergin_Prem_Y_05112001",
        email: "by2167@srmist.edu.in",
        roll_number: "RA2011033010177",
        numbers: numbers,
        alphabets:letters,
        data: req.body.data
    
    }

    res.send(data)
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})
module.exports = app;
