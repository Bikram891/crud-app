const jwt = require('jsonwebtoken');

const authenticateToken = (req,res,next) => {
  const excludedRoutes = ['/login', '/create'];
  if (excludedRoutes.includes(req.path)) return next();
  const authHeader = req.headers['authorization']; // we will Get token from Authorization header

  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer <token>"

  if (!token) {
    return res.status(403).json({
      code:403,
      status:error,
      message: 'Access denied. No token provided.',
      error: error.message
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // It will Verify the token using the secret key
    req.user = decoded; //here we Attach decoded token data to the request object
    next();
  } catch (error) {
    return res.status(401).json({
      code:401,
      status: 'Error',
      message: 'Invalid or expired token.',
      error:error.message
    });
  }
};

module.exports = authenticateToken;
