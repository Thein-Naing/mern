import express from 'express';
import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();


let users =[
  // {
  //   firstName: "John",
  //   lastName: "Wick",
  //   age: "58"
  //       },

  // {
  //   firstName: "Hellen",
  //   lastName: "Wick",
  //   age: "38"
  //             }


]
console.log(users);
// all routes here start with users so we do not need to add users in /.
router.get('/', (req, res)=> {
  res.send(users)
})

router.post('/', (req, res)=> {
  const user = req.body;

  // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
  // const userWithId = {...user, id: uuidv4() });

  users.push({...user, id: uuidv4() });

  res.send(`User with the name ${ user.firstName } added to the DB!`)
});

router.get('/:id', (req, res) => {
  // console.log(req.params);
  // const id = req.params.id
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  // res.send(req.params);
  res.send(foundUser);
});


router.delete('/:id', (req, res)=> {
  const { id } = req.params;

  const users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from DB.`);

})


router.patch('/:id', (req, res)=> {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const userUpdated = users.find((user) => user.id === id);
  if (firstName) userUpdated.firstName = firstName;
  if (lastName) userUpdated.lastName = lastName;
  if (age) userUpdated.age = age;
    res.send(`User with the id ${id} has been updated to DB.`);

})

export default router;
