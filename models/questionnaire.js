const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionnaireSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    passionateIssues: {
        social_justice: { type: Boolean, default: false },
        mental_health: { type: Boolean, default: false },
        gender_equality: { type: Boolean, default: false },
        lgbtq_equality: { type: Boolean, default: false },
        sustainable_development: { type: Boolean, default: false },
        disaster_preparedness: { type: Boolean, default: false },
    },
    locationScope: {
        local: { type: Boolean, default: false },
        regional: { type: Boolean, default: false },
        national: { type: Boolean, default: false },
        international: { type: Boolean, default: false },
    },
    organizationType: {
        nonprofit: { type: Boolean, default: false },
        charitable: { type: Boolean, default: false },
        community: { type: Boolean, default: false },
        individual: { type: Boolean, default: false },
    },
    specifics: {
        faithBased: { type: Boolean, default: false },
        educational: { type: Boolean, default: false },
        healthcare: { type: Boolean, default: false },
        humanitarian: { type: Boolean, default: false },
        environmental: { type: Boolean, default: false },
        political: { type: Boolean, default: false },
    },
    donationFrequency: {
        onceYear: { type: Boolean, default: false },
        twiceYear: { type: Boolean, default: false },
        fourPlusYear: { type: Boolean, default: false },
        onceMonth: { type: Boolean, default: false },
    },
    questionsComplete: { type: Boolean, default: false },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Questionnaire', questionnaireSchema);