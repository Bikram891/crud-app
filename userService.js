const userRepository = require('../repository/userRepository');

const getAllUsers = async () => {
  return await userRepository.getAllUsers();
};

const getUserById = async (id) => {
    return await userRepository.getUserById(id);
  };
const createUser = async (userData) => {
    return await userRepository.createUser(userData);
  };

  const updateUser = async (id, updateData) => {
    return await userRepository.updateUser(id, updateData);
  };
  const patchUpdateUser = async (id, updateData) => {
    return await userRepository.patchUpdateUser(id, updateData);
  };
  
  const deleteUser = async (id) => {
    return await userRepository.deleteUser(id);
  };

  const deleteMany = async () => {
    return await userRepository.deleteMany();
  };


module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  deleteMany,
  patchUpdateUser
};
