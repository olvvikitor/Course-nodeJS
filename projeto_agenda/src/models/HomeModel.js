const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({

}); 

const HomeModel = mongoose.model('home', HomeSchema);

module.exports = HomeModel;