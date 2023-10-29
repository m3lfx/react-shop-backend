const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth');
const upload = require("../utils/multer");
const { registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserProfile,
    updatePassword,
    updateProfile,
    allUsers,
    getUserDetails,
    deleteUser,
    updateUser,

} = require('../controllers/authController');
router.post('/register', upload.single("avatar"), registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);

router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword);
router.get('/me', isAuthenticatedUser, getUserProfile)
router.put('/password/update', updatePassword)
router.put('/me/update', isAuthenticatedUser,  upload.single("avatar"), updateProfile)
router.get('/admin/users', isAuthenticatedUser, allUsers)
router.route('/admin/user/:id').get(isAuthenticatedUser, getUserDetails ).delete(isAuthenticatedUser, deleteUser).put(isAuthenticatedUser,  updateUser)
// router.route('/admin/user/:id')
//     .get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails)
//     .put(isAuthenticatedUser, authorizeRoles('admin'), updateUser)
    

// router.get('/logout',logout);

module.exports = router;