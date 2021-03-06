/* eslint-disable spaced-comment */
/* eslint-disable indent */
const { DataTypes } = require('sequelize');
const db = require('../db/config/index');
const BatchJobInstance = require('./BatchJobInstance');

const BatchJobExecution = db.define('batchJobExecution', {
      job_execution_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
      },
      version: {
        type: DataTypes.BIGINT,
      },
      job_instance_id: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      create_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      start_time: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
      },
      exit_code: {
        type: DataTypes.STRING,
      },
      exit_message: {
        type: DataTypes.STRING,
      },
      last_updated: {
        type: DataTypes.DATE,
      },
      job_configuration_location: {
        type: DataTypes.STRING,
      }
}, {
    schema: 'sisbajud_spgbat',
    tableName: 'batch_job_execution',
    freezeTableName: true,
    timestamps: false,
});

BatchJobExecution.belongsTo(BatchJobInstance, {as: 'BatchJobInstance', foreignKey: 'job_instance_id'});
module.exports = BatchJobExecution;
