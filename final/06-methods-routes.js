const express = require("express");
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

app.use(express.static("./methods-public"));

// middleware
app.use(express.urlencoded({ extended: false }));

//parse data
app.use(express.json());

app.use('/api/users',people)
app.use('/login',auth)



app.listen(5000, () => {
  console.log("Server listening");
});
