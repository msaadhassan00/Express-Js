let {people} = require('../data');

const getUsers = (req, res) => {
    res.status(200).json({ success: true, data: people });
  }

const CreateUser = (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(401).json({ success: false, msg: "Provide Name" });
    }
    res.status(200).json({ success: true, person: name });
  }

const updateUser = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    const person = people.find((person) => person.id === Number(id));
  
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` });
    }
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    res.status(200).json({ success: true, data: newPeople });
  }

const deleteUsers = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
  }

module.exports = {
    getUsers,
    CreateUser,
    updateUser,
    deleteUsers
}