const express = require('express');
const pool = require('../db');

var router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM todolist");
    res.json(allItems.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;