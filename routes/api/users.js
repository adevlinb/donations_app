const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');


// POST /api/users
router.post('/', usersCtrl.create);

router.get('/:id/questionnaire', usersCtrl.getQuestionnaire);

router.post("/submitQuestionnaire", usersCtrl.submitQuestionaire)

module.exports = router;