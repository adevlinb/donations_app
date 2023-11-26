const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    altName: String,
    altEmail: String,
    altNumber: Number,
    contactType: Enumerator,
    message: String
}, {
    timestamps: true,
});

module.exports = mongoose.model('Contact', contactSchema);