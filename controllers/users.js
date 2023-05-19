import { v4 as uuidv4 } from 'uuid';


export const getUsers = (req, res)=> {
  res.send(users)
};


export const createUser = (req, res)=> {
  const user = req.body;
   users.push({...user, id: uuidv4() });

  res.send(`User with the name ${ user.firstName } added to the DB!`)
};


export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  // res.send(req.params);
  res.send(foundUser);
};


export const deleteUser =  (req, res)=> {
  const { id } = req.params;

  const users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from DB.`);
};




export const updateUser = (req, res)=> {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const userUpdated = users.find((user) => user.id === id);
  if (firstName) userUpdated.firstName = firstName;
  if (lastName) userUpdated.lastName = lastName;
  if (age) userUpdated.age = age;
    res.send(`User with the id ${id} has been updated to DB.`);

};
