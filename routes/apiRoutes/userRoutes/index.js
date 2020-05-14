const router = require('express').Router();
const { addTodo, getAllUserEmails, getUserTodos, deleteUserTodoById, updateUserTodoById} = require('./../../../controllers/userController');
const { requireAuth } = require('./../../../middlewares/authMiddlewares');

//api/user

// /api/user/todo
router.route('/todo')
.post(requireAuth, addTodo)
.get(requireAuth, getUserTodos);

router.route('/todos/:todoId')
.delete(requireAuth, deleteUserTodoById)
.put(requireAuth, updateUserTodoById);

router.get('/emails', getAllUserEmails);

module.exports = router;
