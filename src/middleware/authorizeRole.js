const jwt = require('jsonwebtoken');

const authorizeRole = (requiredRoles) => {
  return (req, res, next) => {
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];

      if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
      }

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Attach user data to request object

      // Check if user's role is authorized
      if (!requiredRoles.includes(decoded.role)) {
        return res.status(401).json({
            code:401,
            Status:'Unauthorized',
            message: 'Unauthorized. Insufficient permissions.',
            error:error.message
            });
      }

      next(); 
    } catch (error) {
      return res.status(401).json({
        code:401,
        Status:'Unauthorized',
        message: 'Invalid or expired token.',
        error:'Invalid Token'

        // message: 'Invalid or expired token.', error: error.message 
        });
    }
  };
};

module.exports = authorizeRole;
