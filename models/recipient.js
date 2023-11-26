const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipientSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    donationGoal: Number,
    settings: { 
        notifications: { type: String },
        locationServices: { type: String },
        siri: { type: String },
        language: { type: String },
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Recipient', recipientSchema);