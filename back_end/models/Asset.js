const Sequelize = require('sequelize')

const db = require('../database/database.js')

module.exports = db.sequelize.define(
    'asset',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        asset_code: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        asset_type: {
            type: Sequelize.STRING
        },
        asset_info: {
            type: Sequelize.STRING
        },
        asset_info_jp: {
            type: Sequelize.STRING
        },
        purpose: {
            type: Sequelize.STRING
        },
        serial_number: {
            type: Sequelize.STRING
        },
        started_date: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.INTEGER
        },
        manager: {
            type: Sequelize.STRING
        },
        owner: {
            type: Sequelize.STRING
        },
        note: {
            type: Sequelize.STRING
        },
        confirm: {
            type: Sequelize.INTEGER
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