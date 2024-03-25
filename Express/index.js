const express = require('express');
const app = express();
app.listen(3000);
app.get('/',(req,res)=>{
    // res.send('<p>Home Pagess</p>');
    res.sendFile('D:/Training day 3/assets/index.html');
});