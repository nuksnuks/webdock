const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('webdock_db', 'root', 'zob4hSbUGSAM', {
  host: 'davidsserver.vps.webdock.cloud',
  dialect: 'mysql',
});

module.exports = sequelize;
