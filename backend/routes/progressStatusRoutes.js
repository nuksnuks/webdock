const express = require('express');
const router = express.Router();
const ProgressStatusController = require('../controllers/ProgressStatusController.');

// Define routes
router.get('/progress-statuses', ProgressStatusController.getAllProgressStatuses);
router.get('/progress-statuses/:id', ProgressStatusController.getProgressStatusById);
router.post('/progress-statuses', ProgressStatusController.createProgressStatus);
router.put('/progress-statuses/:id', ProgressStatusController.updateProgressStatus);
router.delete('/progress-statuses/:id', ProgressStatusController.deleteProgressStatus);

module.exports = router;
