const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionnaireSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    passionateIssues: {
        question: { type: String, default: "Which cause or issues are you most passionate about?" },
        social_justice: { prompt: { type: String, default: "Human rights and social justice" }, response: { type: Boolean, default: false }},
        mental_health: { prompt: { type: String, default: "Mental health and well-being"}, response: {type: Boolean, default: false }},
        gender_equality: { prompt: { type: String, default: "Gender equality and women's empowerment"}, response: {type: Boolean, default: false }},
        lgbtq_equality: { prompt: { type: String, default: "LGBTQ+ rights and advocacy"}, response: {type: Boolean, default: false }},
        sustainable_development: { prompt: { type: String, default: "Sustainable development and renewable energy"}, response: {type: Boolean, default: false }},
        disaster_preparedness: { prompt: { type: String, default: "Disaster preparedness and response"}, response: {type: Boolean, default: false }},
    },
    locationScope: {
        question: { type: String, default: "Would you prefer to support local, national, regional, or international initiatives?"},
        local: { prompt: { type: String, default: "Local, in my neighborhood or city" }, response: {type: Boolean, default: false }},
        regional: { prompt: { type: String, default: "Regional initiatives within my country" }, response: {type: Boolean, default: false }},
        national: { prompt: { type: String, default: "National initiatives within my country" }, response: {type: Boolean, default: false }},
        international: { prompt: { type: String, default: "International initiatives addressing global challenges" }, response: {type: Boolean, default: false }},
    },
    organizationType: {
        question: { type: String, default: "What type of organization(s) would you like to support?"},
        nonprofit: { prompt: { type: String, default: "Nonprofit organizations" }, response: {type: Boolean, default: false }},
        charitable: { prompt: { type: String, default: "Charitable foundations" }, response: {type: Boolean, default: false }},
        community: { prompt: { type: String, default: "Community-based initiatives" }, response: {type: Boolean, default: false }},
        individual: { prompt: { type: String, default: "individual fundraising" }, response: {type: Boolean, default: false }},
    },
    specifics: {
        question: { type: String, default: "Any specific criteria you would like to support?"},
        faithBased: { prompt: { type: String, default: "Faith-based organizations" }, response: {type: Boolean, default: false }},
        educational: { prompt: { type: String, default: "Educational institutions" }, response: {type: Boolean, default: false }},
        healthcare: { prompt: { type: String, default: "Healthcare institutions" }, response: {type: Boolean, default: false }},
        humanitarian: { prompt: { type: String, default: "Humanitarian aid organizations" }, response: {type: Boolean, default: false }},
        environmental: { prompt: { type: String, default: "Environmental conservation groups" }, response: {type: Boolean, default: false }},
        political: { prompt: { type: String, default: "political contributions" }, response: {type: Boolean, default: false }},
    },
    donationFrequency: {
        question: { type: String, default: "How often to you donate or wish to donate?"},
        onceYear: { prompt: { type: String, default: "Once a year" }, response: {type: Boolean, default: false }},
        twiceYear: { prompt: { type: String, default: "Twice or more a year" }, response: {type: Boolean, default: false }},
        fourPlusYear: { prompt: { type: String, default: "Four or more a year" }, response: {type: Boolean, default: false }},
        onceMonth: { prompt: { type: String, default: "Monthly" }, response: {type: Boolean, default: false }},
    },
    questionsComplete: { type: Boolean, default: false },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Questionnaire', questionnaireSchema);