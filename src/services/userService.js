const userRepository = require('../repository/userRepository');
const ApiError = require('../utils/apiError');

const createUser = async (userData) => {
  const existingUser = await userRepository.getUserByEmail(userData.email);
  if (existingUser) {
    throw new ApiError(409, 'Email already exists');
  }
  return await userRepository.createUser(userData);
};

const getUserById = async (id) => {
  const user = await userRepository.getUserById(id);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }
  return user;
};
const updateUser = async (id, updateData) => {
  const user = await userRepository.getUserById(id);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }
  return await userRepository.updateUser(id, updateData);
};

const getAllUsers = async () => {
  return await userRepository.getAllUsers();
};

const deleteAllUsers = async() => {
  return await userRepository.deleteMany();
}

const deleteOne = async(id) => {
  const user = await userRepository.getUserById(id);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }
  return await userRepository.deleteUserById(id);
}

module.exports = { createUser, getUserById, getAllUsers,updateUser,deleteAllUsers,deleteOne};
