const Sequelize = require('sequelize')

const db = require('../database/database.js')

module.exports = db.sequelize.define(
  'session',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_user: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    token: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
)