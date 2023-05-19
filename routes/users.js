import express from 'express';

const router = express.Router();

router.get('/users', (req, res)=>{
  res.send('Hi Mr Nobody')
});

export default router;
