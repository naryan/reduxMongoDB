const router = require('express').Router();
const { addTodo, getAllUserEmails } = require('./../../../controllers/userController');
//api/user

// /api/user/todos
router.route('/todos')
.post(addTodo);

router.route('/emails')
.get(getAllUserEmails);

module.exports = router;
