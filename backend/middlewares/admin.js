// /Users/abd/developer/webdock/backend/Middlewares/admin.js
const adminMiddleware = (req, res, next) => {
    try {
      const { user } = req;
  
      // Check if the user has admin privileges (customize this based on your user model)
      if (user.role === 'admin') {
        // User is an admin, proceed to the next middleware or route
        next();
      } else {
        // User is not an admin, return unauthorized status
        res.status(403).json({ message: 'Forbidden' });
      }
    } catch (error) {
      console.error('Error checking admin privileges:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  module.exports = adminMiddleware;
  