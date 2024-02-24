const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    email:{type:String, required:true},
    senha:{type:String, required:true},
});
const FormModel = mongoose.model('user',FormSchema);
module.exports=FormModel;