const {
    Sequelize, Model, DataTypes, Op,
} = require('sequelize');
const sequelize = new Sequelize('qabulxona','root','1202',
    {
        host: '127.0.0.1',
        dialect: 'mysql',
        force: false,
        logging: false,
    });
const Users = require('../models/users_account')(sequelize, DataTypes);
const Applications = require('../models/applications')(sequelize, DataTypes);
const Admins = require('../models/admins')(sequelize, DataTypes);

module.exports.start = async () => {
    await Users.sync();
    await Applications.sync();
};

module.exports.addUser = (options) => Users.create(options).then(() => {
    console.log("User successfully added: " + options.first_name + ", " + options.user_id)
    return 'Details updated'
}).catch((e) => {
    console.error('Error addHistory', e.message);
});

module.exports.addMessage = (options) => Applications.create(options).then(() => {
    console.log("Message successfully added: " + options.message)
    return 'Details updated'
}).catch((e) => {
    console.error('Error addHistory', e.message);
});