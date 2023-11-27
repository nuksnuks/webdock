const express = require('express');
const router = express.Router();
const FlagStatusController = require('../controllers/FlagStatusController.');

// Define routes
router.get('/flag-statuses', FlagStatusController.getAllFlagStatuses);
router.get('/flag-statuses/:id', FlagStatusController.getFlagStatusById);
router.post('/flag-statuses', FlagStatusController.createFlagStatus);
router.put('/flag-statuses/:id', FlagStatusController.updateFlagStatus);
router.delete('/flag-statuses/:id', FlagStatusController.deleteFlagStatus);

module.exports = router;
