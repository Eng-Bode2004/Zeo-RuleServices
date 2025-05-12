const express = require('express');
const router = express.Router();
const RuleController = require('../Controllers/RulesController');

router.post("/", RuleController.createRule);
router.get("/", RuleController.getAllRules);

module.exports = router;