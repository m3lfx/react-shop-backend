
const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");

const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct, getAdminProducts, createProductReview, getProductReviews, deleteReview, productSales
 } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.get('/products', getProducts)
// router.post('/product/new', isAuthenticatedUser, authorizeRoles('admin'), newProduct)
router.get('/product/:id', getSingleProduct);
router.route('/admin/product/:id', isAuthenticatedUser, ).put(updateProduct).delete(deleteProduct);
// router.get(getAdminProducts);
router.get('/admin/products', getAdminProducts);
router.post('/admin/product/new', isAuthenticatedUser, upload.array('images', 10), newProduct);
router.put('/review', isAuthenticatedUser, createProductReview);
router.get('/reviews',isAuthenticatedUser, getProductReviews)
router.delete('/reviews', isAuthenticatedUser, authorizeRoles('admin'), deleteReview)
router.get('/admin/product-sales', productSales);
module.exports = router;