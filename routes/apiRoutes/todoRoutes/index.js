const router = require('express').Router();

const { getTodos } = require('../../../controllers/todoController');

router.get('/', getTodos);

module.exports = router;