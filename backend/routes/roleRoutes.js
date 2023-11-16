const express = require('express');
const RoleController = require('../controllers/RoleController.');
const router = express.Router();

router.get('/roles', RoleController.getAllRoles);
router.get('/roles/:id', RoleController.getRoleById);
// Add other routes as needed

module.exports = router;
