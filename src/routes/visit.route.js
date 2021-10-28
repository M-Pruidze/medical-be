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
router.get('/', allVisits);
router.post('/', newVisit);
router.put('/:id', updatedVisit);
router.delete('/:id', deletedVisit);
// router.delete('/visit/', deleteAllVisits);

module.exports = router;
