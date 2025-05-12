const RulesModel = require("../Models/Rules");

class RulesService {
    async createRule(ruleData) {
        try {
            const { name,description,imageURL } = ruleData;

            // Validate input
            if (!name||!description||!imageURL) {
                return Promise.reject(new Error("Please enter all Fields required!"));
            }

            // Check if Rule exists (with await)
            const existRule = await RulesModel.findOne({ name });
            if (existRule) {
                return Promise.reject(new Error("Rule already exists!"));
            }

            // Create and save new rule
            const newRule = new RulesModel({ name,description,imageURL });
            await newRule.save();
            return newRule;
        } catch (error) {
            throw error;
        }
    }


    async getAllRules() {
        try {

            return await RulesModel.find();
        }

        catch (error) {
            throw error;
        }
    }

    async deleteRule(ruleId) {
        try {
            if (!ruleId) {
                return Promise.reject(new Error("Please enter ruleId which is required!"));
            }
            return await RulesModel.findByIdAndDelete(ruleId);

        }
        catch (error) {
            throw error;
        }
    }


    async getRuleName(ruleId) {
        try {

            if (!ruleId) {
                return Promise.reject(new Error("Please enter ruleId which is required!"));
            }

            const rule = await RulesModel.findById(ruleId).select("name");
            if (!rule) {
                return Promise.reject(new Error("Rule not found!"));
            }
            return rule;

        }

        catch (error) {
            throw error;
        }
    }

}

module.exports = new RulesService();