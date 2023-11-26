const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
    donor: { type: Schema.Types.ObjectId, ref: 'Donor' },
    recipient: { type: Schema.Types.ObjectId, ref: 'Recipient' },
    amount: Number
}, {
    timestamps: true,
});


module.exports = mongoose.model('Donation', donationSchema);