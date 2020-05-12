const express = require('express');
const mongoos = require('mongoos');

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoos.connect(process.env.MONGODB_URL || 'mongodb://localhost/todo_mongoDB')

app.listen(PORT);