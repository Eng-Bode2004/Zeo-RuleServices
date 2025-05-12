const RuleService = require('../Services/RulesServices');

class RulesController {
    async createRule(req, res) {
        try {
            const { name ,description,imageURL } = req.body;

            if (!name||!description||!imageURL) {
                return res.status(400).json({
                    success: false,
                    message: 'Rule name is required'
                });
            }

            // Create Rule (with await)
            const newRule = await RuleService.createRule({ name,description,imageURL });

            res.status(201).json({
                success: true,
                message: 'Rule created successfully',
                data: newRule
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async getAllRules(req,res){
        try {
            const rules = await RuleService.getAllRules();
            res.status(200).json({
                success: true,
                data: rules
            })
        }catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }
}

module.exports = new RulesController();