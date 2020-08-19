/* eslint-disable padded-blocks */
/* eslint-disable arrow-parens */
const express = require('express');

const router = express.Router();
// eslint-disable-next-line no-unused-vars
const db = require('../db/config/index');

const BatchJobExecution = require('../model/BatchJobExecution');
const BatchJobInstance = require('../model/BatchJobInstance');
const BatchStepExecution = require('../model/BatchStepExecution');

router.get('/jobs', async (req, res, next) => {
  try {
    const executions = await BatchJobExecution.findAll({
      order: [
        ['job_execution_id', 'DESC'], 
      ],
      limit: 10, 
      include: [{model:BatchJobInstance, as: 'BatchJobInstance'}]
    });
    res.json(executions);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get('/jobselecionado', async (req, res, next) => {
  try {
    const { jobname } = req.query;
    console.log(jobname)
    
    if(jobname === 'Todos') {
      const executions = await BatchJobExecution.findAll({
        order: [
          ['job_execution_id', 'DESC'], 
        ],
        limit: 10,
        include: [{model:BatchJobInstance, as: 'BatchJobInstance'} 
       ],
      });
      res.json(executions);
    } else {
      const executions = await BatchJobExecution.findAll({
        order: [
          ['job_execution_id', 'DESC'], 
        ],
        limit: 10, 
        include: [{model:BatchJobInstance, as: 'BatchJobInstance', 
          where: {
            job_name: jobname
          }}, 
       ],
       
      });
      res.json(executions);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get('/nomesjobs', async (req, res, next) => {
  try {
    const executions = await BatchJobInstance.findAll({
      attributes: ['job_name'],
      group: ['job_name']
    });

    res.json(executions);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get('/steps', async (req, res, next) => {
  try {
    const { id } = req.query;
    const steps = await BatchStepExecution.findAll({
      where: {
        // eslint-disable-next-line quote-props
        job_execution_id: id
      },
      order: [
        ['step_execution_id', 'DESC'], 
      ],
      include: [{ all: true, nested: true }]
    });
    res.json(steps);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
