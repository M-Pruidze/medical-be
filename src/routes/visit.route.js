const express = require('express');
const router = express.Router();

// importing controllers
const {
    allVisits,
    newVisit,
    updatedVisit,
    deletedVisit,
    // deleteAllVisits,
  } = require('../controllers/visit.controller');

// visit routes
router.get('/visit', allVisits);
router.post('/visit', newVisit);
router.put('/visit/:id', updatedVisit);
router.delete('/visit/:id', deletedVisit);
// router.delete('/visit/', deleteAllVisits);

module.exports = router;
