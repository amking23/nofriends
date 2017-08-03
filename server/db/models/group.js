const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Group = db.define('group', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = Group
