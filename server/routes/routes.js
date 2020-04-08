const express = require('express');
const router = express.Router();
const routesController = require('../controller/routesController');

router.post('/sync', routesController.syncJob);

router.get('/jobs', routesController.getJobs);

module.exports = router;