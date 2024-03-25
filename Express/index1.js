let express = require('express');
let mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://ranjithayk:kCG6LkYXgRDpsOnm@cluster0.gyg3zh4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then((x)=>{
    console.log('Connected to DB');
})
.catch((err)=>{
    console.error('Error connecting to DB');
});

const app = express();

const server= app.listen(4000,()=>{
    console.log('Connected to port 4000')
})