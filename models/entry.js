"use strict";

const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const entrySchema = new mongoose.Schema({
    entryType: {
        type: String,
        required: false
    },
    inputDate: {
        type: String,
        required: false
    },
    inputPlay: {
        type: Array,
        required: false
    },
    inputAuthor: {
        type: String,
        required: false
    },
    inputRole: {
        type: String,
        required: false
    },
    inputCo: {
        type: String,
        required: false
    },
    inputLocation: {
        type: String,
        required: false
    },
    loggedInUserName: {
        type: String,
        required: false
    }
});

const Entry = mongoose.model('Achievement', entrySchema);

module.exports = Entry;
