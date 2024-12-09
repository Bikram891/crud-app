const User = require('../models/userModel');

class UserRepository {
  
  async getAllUsers() {
    try {
      return await User.find();
    } catch (error) {
      throw new Error('Error fetching all users: ' + error.message);
    }
  }

  async createUser(userData) {
    try {
      return await User.create(userData);
    } catch (error) {
      throw error; 
    }
  }

  async getUserById(id) {
    try {
      const user = await User.findById(id);
      if (!user) throw new Error('User not found');
      return user;
    } catch (error) {
      throw new Error('Error fetching user by ID: ' + error.message);
    }
  }

  async updateUser(id, updateData) {
    try {
      const user = await User.findByIdAndUpdate(id, updateData,
         {
           new: true,
           runValidators: true
           });
      if (!user) throw new Error('User not found');
      return user;
    } catch (error) {
      throw new Error('Error updating user: ' + error.message);
    }
  }

  async patchUpdateUser(id, updateData) {
    try {
      const user = await User.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
      if (!user) throw new Error('User not found');
      return user;
    } catch (error) {
      throw new Error('Error patch updating user: ' + error.message);
    }
  }

  async deleteUser(id) {
    try {
      return await User.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }

  async deleteMany() {
    try {
      return await User.deleteMany();
    } catch (error) {
      throw new Error('Error deleting users: ' + error.message);
    }
  }
}

module.exports = new UserRepository();

