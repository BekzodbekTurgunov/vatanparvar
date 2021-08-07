var DataTypes = require("sequelize").DataTypes;
var _admins = require("./admins");
var _applications = require("./applications");
var _users_account = require("./users_account");

function initModels(sequelize) {
  var admins = _admins(sequelize, DataTypes);
  var applications = _applications(sequelize, DataTypes);
  var users_account = _users_account(sequelize, DataTypes);


  return {
    admins,
    applications,
    users_account,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
