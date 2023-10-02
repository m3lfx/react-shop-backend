const User = require('../models/user');
const sendToken = require('../utils/jwtToken');

// const ErrorHandler = require('../utils/errorHandler');

exports.registerUser = async(req, res, next) => {
	const { name, email, password } = req.body;
	 const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'avatars/hsdfl66pg2mpvp5irfqy',
            url: 'https://res.cloudinary.com/dgneiaky7/image/upload/v1680144230/avatars/hsdfl66pg2mpvp5irfqy.jpg'
        }
    })
	 //test token
	//  const token = user.getJwtToken();
	 
	//   res.status(201).json({
	//   	success:true,
	//   	user,
	//  	token
	//   })
	 sendToken(user, 200, res)
}

exports.loginUser = async(req, res, next) => {
    const { email, password } = req.body;

    // Checks if email and password is entered by user
    if (!email || !password) {
        return res.status(400).json({error: 'Please enter email & password'})
    }
    // if (!email || !password) {
    //     return next(new ErrorHandler('Please enter email & password', 400))
    // }

    // Finding user in database
    const user = await User.findOne({ email }).select('+password')
    
    if (!user) {
        return res.status(401).json({message: 'Invalid Email or Password'})
    }
    // if (!user) {
    //     return next(new ErrorHandler('Invalid Email or Password', 401));
    // }

    // Checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    // if (!isPasswordMatched) {
    //     return next(new ErrorHandler('Invalid Email or Password', 401));
    // }
    if (!isPasswordMatched) {
            return res.status(401).json({message: 'Invalid Email or Password'})
        }
    // const token = user.getJwtToken();

	//  res.status(201).json({
	//  	success:true,
       
	//  	token
	//  });
    sendToken(user, 200, res)
}