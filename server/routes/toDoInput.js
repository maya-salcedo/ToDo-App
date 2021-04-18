const express = require('express');
// const pool = require("../db");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const {Item} = req.body;
        console.log(Item);
    } catch (err) {
        console.erro(err.message);
    }
});

module.exports = router;