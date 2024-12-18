const userService = require('../services/userService');
const User = require('../models/userModel');

const createUser = async (req, res, next) => {
  try {
   
    const user = await userService.createUser(req.body);
    const userWithoutPassword = await User.findById(user.id).select('-password');
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: userWithoutPassword,
    });
  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message || 'Internal Server Error',
    })
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    const page = parseInt(req.query.page) || null;
    const limit = parseInt(req.query.limit) || null;
     const result = await paginate(User, page, limit, ['password']);
     if(page && limit){
    res.status(200).json({
      success: true,
      metadata: {
        totalUsers: result.totalDocuments,
        size:10,
        page: result.currentPage,
        totalPages:limit,
      },
      data: result.data,
    });
  }
  else{
    return res.status(200).json({
      success: true,
      data: users,
    });
  }
   
  } catch (error) {
    res.status(500).json({
      sucess:false,
      message:error.message || 'Internal Server Error',
    });
  }
}

const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if(!user) {
      return res.status(404).json({
        sucess:false,
        message:'User not found',
      });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message:error.message || 'Internal server Error',
    });
  }
};


const updateUser = async (req, res,next) => {
  try {
    const { id } = req.params;
    const updateData = await userService.updateUser(id,req.body);
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: updateData,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message:error.message || 'Internal Server Error',
    })
  }
};

const deleteAllUsers = async (req, res, next) => {
  try {
    const result = await userService.deleteAllUsers();
    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'No users found to delete',
      });
    }

    res.status(200).json({
      success: true,
      message: `${result.deletedCount} users deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message:error.message || 'Internal server Error'
    })
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await userService.deleteOne(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({
      success: true,
      message: 'User Deleted successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message:error.message || 'Internal server Error'
    })
  }
};

module.exports = { createUser, getUserById ,getAllUsers,updateUser,deleteAllUsers,deleteUser};

