var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var saltRounds = 10;

var User = db.Model.extend({
  tableName: 'users'

  // hashPassword: function(unhashedPassword) {
  //   bcrypt.genSalt(saltRounds, function(err, salt) {
  //     bcrypt.hash(unhashedPassword, salt, function(err, hash) {

  //     })
  //   })
  // }
});



module.exports = User;