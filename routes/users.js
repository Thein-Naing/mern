import express from 'express';
import { getUsers, getUser, createUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

let users =[];
// console.log(users);
// all routes here start with users so we do not need to add users in /.
router.get('/', getUsers);

router.post('/', createUser);
  // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
  // const userWithId = {...user, id: uuidv4() });

 router.get('/:id', getUser);
  // console.log(req.params);
  // const id = req.params.id
  // res.send(req.params);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
