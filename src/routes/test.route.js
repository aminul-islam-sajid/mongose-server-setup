const express = require('express');
const router = express.Router();
const testController = require('../controllers/test.control');
router.post('/test', testController.createTestController);
router.get('/test', testController.getTestController);
module.exports = router;
