const { login } = require('../services/userAuthService');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token } = await login(email, password);
    res.status(200).json({
            code: 200,
            status: 'Success',
            message: 'Login successful',
           data:{ token: token}
        
    });
  } catch (error) {
    res.status(400).json({
        code:400,
        status: 'Error',
        message: 'Invalid Input',
        error: "Failed to login. Please check your email or password"
      });
  }
};

module.exports =  loginUser ;
