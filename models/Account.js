const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    accountnumber:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);