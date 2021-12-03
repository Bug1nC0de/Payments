const express = require('express');
const router = express.Router();

router.post('/ozowPay', async (req, res) => {
  try {
    console.log('Make Ozow Payment');
  } catch (error) {
    console.error(error.message);
  }
});

router.post('/peachPay', async (req, res) => {
  try {
    console.log('Make Peach Payment');
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
