import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

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

  // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d

  const userWithId = {...user, id: uuidv4( )}

  users.push(user)

  res.send(`User with the name ${ user.firstName } added to the DB!`)
})



export default router;
