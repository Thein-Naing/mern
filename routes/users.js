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
console.log(users);
// all routes here start with users so we do not need to add users in /.
router.get('/', (req, res)=> {
  res.send(users)
})

router.post('/', (req, res)=> {
  const user = req.body;
  users.push(user)

  res.send(`User with the name ${ user.firstName } added to the DB!`)
})



export default router;
