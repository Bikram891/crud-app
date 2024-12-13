const { UserAuthLogin } = require('../models/userModel');
const bcrypt = require('bcryptjs');

const findUserByEmail = async (email) => {
    try {
      const user = await UserAuthLogin.findOne({ email });
      if (!user) {
        throw new Error('User email not found');
      }
      return user;
    } catch (error) {
      console.error('Error in findUserByEmail:', error.message);
      throw new Error('Database error: Unable to retrieve user by email');
    }
  };

const comparePassword = async (enteredPassword, storedPassword) => {
  try {
    const isMatch = await bcrypt.compare(enteredPassword, storedPassword);
    if (!isMatch) {
      throw new Error('Password mismatch');
    }
    return true;
  } catch (error) {
    console.error('Error in comparePassword:', error.message);
    throw new Error('Error while comparing passwords');
  }
};

module.exports = { findUserByEmail, comparePassword };
