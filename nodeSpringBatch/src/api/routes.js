/* eslint-disable padded-blocks */
/* eslint-disable arrow-parens */
const express = require('express');
const { Op } = require('sequelize');

const router = express.Router();
// eslint-disable-next-line no-unused-vars
const db = require('../db/config/index');

const BatchJobExecution = require('../model/BatchJobExecution');
const BatchStepExecution = require('../model/BatchStepExecution');

router.get('/jobs', async (req, res, next) => {
  try {
    const executions = await BatchJobExecution.findAll();
    res.json(executions);
  } catch (err) {
    next(err);
  }
// try {
//   const batchExecution = await BatchExecution.findOne({ where: { job_execution_id: 541 } });
//   res.json(batchExecution);
// } catch (error) {
//   next(error);
// }
});

router.get('/steps', async (req, res, next) => {
  try {
    const { id } = req.query;
    const steps = await BatchStepExecution.findAll({
      where: {
        // eslint-disable-next-line quote-props
        job_execution_id: id
      }
    });
    console.log(steps);
    res.json(steps);
  } catch (err) {
    next(err);
  }
// try {
//   const batchExecution = await BatchExecution.findOne({ where: { job_execution_id: 541 } });
//   res.json(batchExecution);
// } catch (error) {
//   next(error);
// }
});

module.exports = router;
