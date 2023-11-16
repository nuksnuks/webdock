// controllers/RoleController.js
const { Role } = require('../Models/RoleModel.');

const RoleController = {
  getAllRoles: async (req, res) => {
    try {
      const roles = await Role.findAll();
      res.json(roles);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getRoleById: async (req, res) => {
    const roleId = req.params.id;
    try {
      const role = await Role.findByPk(roleId);
      if (!role) {
        return res.status(404).send('Role not found');
      }
      res.json(role);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Add other role-related controller methods...
};

module.exports = RoleController;
