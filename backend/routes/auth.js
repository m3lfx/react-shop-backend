const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth');
const { registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserProfile,
    updatePassword,
} = require('../controllers/authController');
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);

router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword);
router.get('/me', isAuthenticatedUser, getUserProfile)
router.put('/password/update', isAuthenticatedUser, updatePassword)

// router.get('/logout',logout);

module.exports = router;