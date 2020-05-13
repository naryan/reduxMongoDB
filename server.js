const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/todo_mongoDB', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

app.use(routes);

app.listen(PORT);
