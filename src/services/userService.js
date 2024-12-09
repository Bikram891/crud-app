const userRepository = require('../repository/userRepository');

const getAllUsers = async () => {
  try {
    return await userRepository.getAllUsers();
  } catch (error) {
    throw new Error('Error in retrieving users: ' + error.message);
  }
};

const getUserById = async (id) => {
  try {
    return await userRepository.getUserById(id);
  } catch (error) {
    throw new Error('Error in retrieving user by ID: ' + error.message);
  }
};

const createUser = async (userData) => {
  try {
    return await userRepository.createUser(userData);
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, updateData) => {
  try {
    return await userRepository.updateUser(id, updateData);
  } catch (error) {
    throw new Error('Error in updating user: ' + error.message);
  }
};

const patchUpdateUser = async (id, updateData) => {
  try {
    return await userRepository.patchUpdateUser(id, updateData);
  } catch (error) {
    throw new Error('Error in patch updating user: ' + error.message);
  }
};

const deleteUser = async (id) => {
    return await userRepository.deleteUser(id);
};

const deleteMany = async () => {
  try {
    return await userRepository.deleteMany();
  } catch (error) {
    throw new Error('Error in deleting all users: ' + error.message);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  deleteMany,
  patchUpdateUser,
};

