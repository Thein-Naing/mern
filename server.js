import express from 'express';
import body-parser from 'body-parser'

const express = require("express")
const app = express()

app.get('/api', (req, res)=> {
  res.json({"users": ["userOne", "userTwo", "userThree"]})
})
