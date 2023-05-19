import express from 'express';

const router = express.Router();


const users =[
  {
    firstName: "John",
    lastName: "Wick",
    age: "58"
        },

  {
    firstName: "Hellen",
    lastName: "Wick",
    age: "38"
              }


]

// all routes here start with users so we do not need to add users in /.
router.get('/', (req, res)=>{
  console.log(users);

  res.send(users)
})

router.post('/', (req, res)=>{
  console.log("Post");
  res.send("Post")
})



export default router;
