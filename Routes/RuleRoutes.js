const express = require('express');
const router = express.Router();
const RuleController = require('../Controllers/RulesController');

router.post("/", RuleController.createRule);
router.get("/", RuleController.getAllRules);
router.get("/:ruleId", RuleController.getRuleName);

module.exports = router;