const User = require('../models/userModel');
 
const getAllUsers = async () => {
     return await User.find();  
};

const createUser = async (userData) => {
    return await User.create(userData);
  };

  const getUserById = async (id) => {
    return await User.findById(id);
  }; 

  const updateUser = async (id, updateData) => {
    return await User.findByIdAndUpdate(id, updateData);
  };

  const patchUpdateUser = async (id, updateData) => {
    return await User.findByIdAndUpdate(id, updateData);
  };
  
  const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
  };

  const deleteMany = async () => {
    return await User.deleteMany();
  }

module.exports= {
    getAllUsers , createUser,getUserById ,updateUser ,deleteUser ,deleteMany,patchUpdateUser
}