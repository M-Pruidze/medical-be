const express = require('express');
const router = express.Router();

const {
    allDoctors,
    newDoctor,
  } = require('../controllers/doctor.controller');

router.get('/doctor', allDoctors);
router.post('/doctor', newDoctor);

module.exports = router;
