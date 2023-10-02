const User = require('../models/user')
const jwt = require("jsonwebtoken")

exports.isAuthenticatedUser = async (req, res, next) => {
    const { token } = req.cookies
    console.log(token)

    // if (!token) {
    //     return next(new ErrorHandler('Login first to access this resource.', 401))
    // }

    if (!token) {
        return res.statute(401).json({message:'Login first to access this resource'})
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id);

    next()
};
