const express = require('express');
const router = express.Router();

let { people } = require("../data");

const {
    getUsers,
    CreateUser,
    updateUser,
    deleteUsers
} = require("../controllers/people");

//   router.get("/", getUsers)
  
//   router.post("/",CreateUser );
  
//   router.put("/:id", updateUser);
  
//   router.delete('/:id',deleteUsers )

router.route('/').get(getUsers).post(CreateUser);
router.route('/:id').put(updateUser).delete(deleteUsers);

module.exports = router