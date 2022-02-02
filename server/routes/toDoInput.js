const express = require('express');
const pool = require('../db');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { id: Id, item: Item } = req.body;
    const newItem = await pool.query(
      'INSERT INTO todolist(id, item) VALUES($1, $2) RETURNING *',
      [Id, Item]
    );
    res.json(newItem.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something Went Wrong');
  }
});

router.get('/', async (req, res) => {
  try {
    const allItems = await pool.query('SELECT * FROM todolist');
    res.json(allItems.rows);
  } catch (err) {
    console.err('is it coming from get', err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = await pool.query(
      'DELETE FROM todolist WHERE id = $1 RETURNING *',
      [id]
    );
    res.json(deleteItem.rows[0]);
  } catch (err) {
    console.err(err.message);
  }
});

module.exports = router;
