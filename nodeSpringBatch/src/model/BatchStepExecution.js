/* eslint-disable spaced-comment */
/* eslint-disable indent */
const { DataTypes } = require('sequelize');
const db = require('../db/config/index');

const BatchStepExecution = db.define('batchStepExecution', {
      step_execution_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
      },
      version: {
        type: DataTypes.BIGINT,
      },
      step_name: {
        type: DataTypes.STRING,
      },
      job_execution_id: {
        type: DataTypes.BIGINT,
        allowNull: false
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
      commit_count: {
        type: DataTypes.BIGINT,
      },
      read_count: {
        type: DataTypes.BIGINT,
      },
      filter_count: {
        type: DataTypes.BIGINT,
      },
      write_count: {
        type: DataTypes.BIGINT,
      },
      read_skip_count: {
        type: DataTypes.BIGINT,
      },
      write_skip_count: {
        type: DataTypes.BIGINT,
      },
      process_skip_count: {
        type: DataTypes.BIGINT,
      },
      rollback_count: {
        type: DataTypes.BIGINT,
      },
      exit_code: {
        type: DataTypes.STRING,
      },
      exit_message: {
        type: DataTypes.STRING,
      },
      last_updated: {
        type: DataTypes.DATE,
      }
}, {
    schema: 'sisbajud_spgbat',
    tableName: 'batch_step_execution',
    freezeTableName: true,
    timestamps: false,
});

module.exports = BatchStepExecution;
