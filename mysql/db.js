const { Sequelize } = require('sequelize');
const {
  HOST, USER, PASSWORD, DB, DIALECT,
} = require('../config').database;

const userParams = require('./User.model.params');
const countryParams = require('./Country.model.params');

const sequelize = new Sequelize(DB, USER, PASSWORD, { host: HOST, dialect: DIALECT });
const User = sequelize.define(...userParams);
const Country = sequelize.define(...countryParams);

module.exports = { sequelize, User, Country };
