const express = require('express')
const router = express.Router();

const { newOrder,
		getSingleOrder,
	    myOrders,
	    allOrders,
	    updateOrder,
	    deleteOrder,
		totalOrders,
		totalSales,
		customerSales,
		salesPerMonth


	} = require('../controllers/orderController')
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, getSingleOrder);
router.route('/orders/me').get(isAuthenticatedUser, myOrders);
router.route('/admin/orders/').get(isAuthenticatedUser, allOrders);

router.route('/admin/order/:id').put(isAuthenticatedUser, updateOrder).delete(isAuthenticatedUser, deleteOrder);
router.get('/admin/total-orders', totalOrders);
router.get('/admin/total-sales', totalSales);
router.get('/admin/customer-sales', customerSales);
router.get('/admin/sales-per-month', salesPerMonth);
module.exports = router;