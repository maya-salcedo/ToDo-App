const express = require('express');
const pool = require("../db");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { Index, TodoItem } = req.body;
        console.log(req.body);
    }
})