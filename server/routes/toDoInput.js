const express = require('express');
const pool = require('../db');
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { Item } = req.body;
    console.log(Item);
    const newItem = await pool.query(
      `INSERT INTO todolist(item) VALUES($1) RETURNING *`, [Item]
    );
    res.json(newItem.rows[0]);
} catch (err) {
    console.error(err.message);
    res.status(500).send('Something Went Wrong');
  }
});

router.get("/", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM todolist");
    console.log(allItems.rows);
    res.json(allItems.rows);
  } catch (err) {
    console.err(err.message);
  }
});

module.exports = router;