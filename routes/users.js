import express from 'express';

const router = express.Router();

// all routes here start with users so we do not need to add users in /.
router.get('/', (req, res)=>{
  res.send('Hi Mr Nobody')
})
export default router;
