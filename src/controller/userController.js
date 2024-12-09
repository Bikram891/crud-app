const userService = require('../services/userService');
/////////////////////Create API/////////////////////////////
const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({
      success: true,
      message: 'User data created successfully.',
      data: user,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Validation Error: ' + Object.values(error.errors)
          .map((err) => err.message)
          .join(', '),
      });
    }
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'Duplicate Key Error: Email already exists.',
      });
    }
    res.status(500).json({
      success: false,
      message: 'Error creating user: ' + error.message,
    });
  }
};

 /////////////////////Update Api///////////////////////////////////// 
  const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const user = await userService.updateUser(id, updateData);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({
        success: true,
        message: 'User successfully Updated',
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

////////////////////////Patch Api////////////////////////////////////
const patchUpdateUser = async (req, res) => {
  try {
    const user = await userService.patchUpdateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    res.status(200).json({
      success: true,
      message: 'User successfully updated',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error.message,
    });
  }
};
///////////////////Get API By ID ////////////////////////////////////////
  const getUserById = async (req, res) => {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
 ///////////////Get API//////////////////////////////////////// 

  const getUsers = async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json({sucess: true, data: users});
    } catch (error) {
      res.status(500).json({ sucess: false, message: error.message });
    }
  };
/////////////////Delete API///////////////////////////////////////////
  const deleteUser = async (req, res) => {
    try {
      const user = await userService.deleteUser(req.params.id);
      if(!user){
        return res.status(404).json({ error: 'User not found' });
      }
        res.status(200).json({message :`${req.body.name} deleted successfully`})
    } catch (error) {
      res.status(400).json({error: error.messgae});
    }
  };
///////////////////////////////Delete All Api//////////////////////////////////////////
  const deleteAllUser = async (req,res)=>{
    try {
      const users = await userService.deleteMany();
      res.status(200).json({
        message: 'All users deleted successfully',
        deletedCount: users.deletedCount,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

module.exports = { getUsers,createUser,getUserById,updateUser,deleteUser,deleteAllUser,patchUpdateUser };
