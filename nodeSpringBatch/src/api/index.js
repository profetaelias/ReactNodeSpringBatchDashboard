const express = require('express');

const routes = require('./routes');

const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/batch', routes);

module.exports = router;
