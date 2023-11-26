const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donorSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    donationGoal: Number,
    phoneNumber: Number,
    profilePic: String,
}, {
    timestamps: true,
});


module.exports = mongoose.model('Donor', donorSchema);