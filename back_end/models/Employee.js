const Sequelize = require('sequelize')

const db = require('../database/database.js')

module.exports = db.sequelize.define(
    'employee',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        phone_number: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        sex: {
            type: Sequelize.INTEGER
        },
        marital_status: {
            type: Sequelize.INTEGER
        },
        home_town: {
            type: Sequelize.STRING
        },
        id_card: {
            type: Sequelize.STRING
        },
        permanent_residence: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        },
        creator_email: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updated: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)