
const {Schema, model, Types} = require('mongoose');

const schema = Schema({
    tel:{type: Number, required: true, unique:true},
    password:{type: String, required: true},
    balance: [{type: Types.ObjectId, ref: 'Balance'}]
});

module.exports = model('User', schema);