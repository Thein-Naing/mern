import express from 'express';
import bodyParser from 'body-parser';

// const express = require("express")
const app = express()

app.get('/', (req, res)=> {
  console.log("test")
  // res.json({"users": ["userOne", "userTwo", "userThree"]})
})
const PORT = 5000;

app.use(bodyParser.json());

app.listen(PORT, ()=> console.log(`Server Running on port : http//localhost:${PORT}`));
