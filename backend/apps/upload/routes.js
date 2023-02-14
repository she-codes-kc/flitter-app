'use strict';

const express = require('express');
const router = express.Router();
const controller = require('./controllers/upload')

// POST api/upload
router.post(
    `/`,
    controller.upload,
    controller.uploadFile
);

module.exports = router;

