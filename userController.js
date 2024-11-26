const userService = require('../services/userService');
/////////////////////Create API/////////////////////////////
const createUser = async (req, res) => {
    try {
      const user = await userService.createUser(req.body);
      return res.status(201).json({
        success: true,
        message: 'User successfully created',
      });
    } catch (error) {
      const { name, email } = req.body;
      if (!name || !email) {
          return res.status(400).json({
              success: false,
              message: "Name and Email are required!",
          });
      } else if(name.length < 2 || name.length > 32){
        return res.status(400).json({
          success: false,
          message: "Name must be between 2 and 32 characters!",
      });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if(email){
        return res.status(400).json({
          success: false,
          message: "Email already exit!",
      })
      } else if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Invalid email format!",
        });
      }
        else{
          res.status(400).json({ error: error.message });
        }
  };
}
 /////////////////////Update Api///////////////////////////////////// 
  const updateUser = async (req, res) => {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      if (!user.name) {
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
    console.error(error);
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
      console.log("users", users);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
/////////////////Delete API///////////////////////////////////////////
  const deleteUser = async (req, res) => {
    try {
      const user = await userService.deleteUser(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
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