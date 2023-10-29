
const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");

const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct, getAdminProducts, createProductReview } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.get('/products', getProducts)
// router.post('/product/new', isAuthenticatedUser, authorizeRoles('admin'), newProduct)
router.get('/product/:id', getSingleProduct);
router.route('/admin/product/:id', isAuthenticatedUser, ).put(updateProduct).delete(deleteProduct);
// router.get(getAdminProducts);
router.get('/admin/products', getAdminProducts);
router.post('/admin/product/new', isAuthenticatedUser, upload.array('images', 10), newProduct);
router.put('/review', isAuthenticatedUser, createProductReview);
module.exports = router;