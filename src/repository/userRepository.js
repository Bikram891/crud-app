const User = require('../models/userModel');

const createUser = async (userData) => {
  try {
    return await User.create(userData);
  } catch (error) {
    if (error.code === 11000) {
      throw new Error('Email already exists');
    }
    throw error;
  }
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const getAllUsers = async () => {
  return await User.find();
};

const updateUser = async (id, updateData) => {
  try {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
  } catch (error) {
    throw new Error('Error updating user: ' + error.message);
  }
};

const deleteMany = async () =>{
  return await User.deleteMany({});
}

const deleteUserById = async (id) =>{
  return await User.findByIdAndDelete(id);
}

module.exports = { createUser, getUserByEmail, getUserById, getAllUsers, updateUser,deleteMany, deleteUserById};

