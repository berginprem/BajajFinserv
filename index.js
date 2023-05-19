const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.get('/bfhl', (req, res) => {
    ans = {operation_code : 1}
    res.send(ans)
})
app.post('/bfhl', (req, res) => {
    var data= (req.body.data)
    console.log(data)
    // var numbers =[]
    // numbers = data.filter(element => typeof element === 'number' || !isNaN(parseFloat(element)));
    // var alphabets = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (typeof arr[i] === 'number') {
    //       numbers.push(arr[i]);
    //     } else if (typeof arr[i] === 'string') {
    //       const parsedNumber = parseFloat(arr[i]);
    //       if (!isNaN(parsedNumber)) {
    //         numbers.push(parsedNumber);
    //       } else {
    //         alphabets.push(arr[i]);
    //       }
    //     }
    //   }
    data ={
        is_success : true,
        user_id:"Bergin_Prem_Y_05112001",
        email: "by2167@srmist.edu.in",
        roll_number: "RA2011033010177",
        numbers: [],
        alphabets:[],
        data: req.body.data
    
    }

    res.send(data)
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})
module.exports = app;
