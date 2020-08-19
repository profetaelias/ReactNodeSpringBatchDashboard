/* eslint-disable spaced-comment */
/* eslint-disable indent */
const { DataTypes } = require('sequelize');
const db = require('../db/config/index');

const BatchJobInstance = db.define('batchJobInstance', {
      job_instance_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
      },
      version: {
        type: DataTypes.BIGINT,
      },
      job_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      job_key: {
        type: DataTypes.STRING,
        allowNull: false,
      }      
}, {
    schema: 'sisbajud_spgbat',
    tableName: 'batch_job_instance',
    freezeTableName: true,
    timestamps: false,
});

module.exports = BatchJobInstance;
