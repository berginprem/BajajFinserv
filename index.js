const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }))
const multer = require('multer');
const upload = multer();
app.use(upload.any());
app.use(express.json())



app.get('/bfhl', (req, res) => {
    ans = {operation_code : 1}
    res.send(ans)
})
app.post('/bfhl', (req, res) => {
    
    try{
    // console.log(req.body)
    var jsonData= (req.body.data)
    if (!jsonData ) {
        return res.status(400).json({ error: 'Invalid input format. Please use x-www-form-urlencoded format for smoother experience' });
      }
    console.log(jsonData)
    const numbers = [];
    const letters = [];
    const str = jsonData;
    const regex = /[A-Za-z0-9]+/g;
// const matches = str.match(regex);
// console.log(matches);
    
    for (let i = 0; i < jsonData.length; i++) {
        const element = jsonData[i];
        if (!isNaN(parseFloat(element))) {
          numbers.push((element));
        } else if(element.match(/[A-Za-z]/i)){
          letters.push(element);
        }
        else {
            return res.status(400).json({ error: 'Invalid input found. ' });
        }
      }
      console.log("hi")
    const data ={
        is_success : true,
        user_id:"Bergin_Prem_Y_05112001",
        email: "by2167@srmist.edu.in",
        roll_number: "RA2011033010177",
        numbers: numbers,
        alphabets:letters,
    
    }
    console.log(data)

    res.json(data)
}catch(e){
  console.log("helo")
  console.log(e)
  res.send(e)}
})
app.get('*', (req, res) => {
  res.send(`I don't know that path!`)
})
app.post('*', (req, res) => {
  res.send(`You're not allowed to post to this path!`)
})
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})
module.exports = app;