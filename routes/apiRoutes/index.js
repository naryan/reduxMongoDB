const router = require('express').Router();

// const todoRoutes = require('./todoRoutes');
// const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');

// Sets up /api/todo
// router.use('/api/todo', todoRoutes);

// /api/user/
// router.use('/api/user', userRoutes);

// /api/auth/
router.use('/api/auth', authRoutes);

module.exports = router;