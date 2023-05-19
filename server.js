import express from 'express';
import bodyParser from 'body-parser';

// const express = require("express")
const app = express()

// app.get('/api', (req, res)=> {
//   res.json({"users": ["userOne", "userTwo", "userThree"]})
// })
const PORT = 5000;

app.unsubscribe(bodyParser.json());

app.listen(PORT, ()=> console.log(`Server running on port : http//localhost${PORT}`));
