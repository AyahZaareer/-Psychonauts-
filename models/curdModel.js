const mongoose = require('mongoose');

const Characters = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true
    },
    slug: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true
    },
    gender: String,
    img: String,
    psiPowers: String
});

const curdModel = mongoose.model('favSchema', Characters);

module.exports = curdModel;