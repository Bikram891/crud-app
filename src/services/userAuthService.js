const UserAuthLogin = require('../models/userModel');
const { generateToken } = require('../utils/jwt');
const bcrypt = require('bcryptjs');

const login = async (email, password) => {
  try {
    //--- Find the user by email ID-------//
    const user = await UserAuthLogin.findOne({ email });
    console.log('User found:', user);
    if (!user) {
      throw new Error('Invalid email or password');
    }

    //----- Compare the provided password with the stored hashed password-----------------//
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid email or password');
    }

    const token = generateToken({ id: user._id, email: user.email,role: user.role });
    console.log('Generated Token:', token);
    return { user, token };
  } catch (error) {
    console.error('Error in login function:', error.message);
    throw new Error('Authentication failed. Please check your credentials');
  }
};

module.exports =  {login} ;
