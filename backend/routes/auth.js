const express = require('express');
const router = express.Router();

const { registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserProfile
} = require('../controllers/authController');
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);

router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword);
router.get('/me', isAuthenticatedUser, getUserProfile)

// router.get('/logout',logout);

module.exports = router;