const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/feedback", (req, res) => {
  const entry = req.body;
  const sqlQuery = `INSERT INTO feedback (feeling, understanding, support, comments)
                      VALUES ($1,$2,$3,$4)`;
  const sqlParams = [
    entry.feeling,
    entry.understanding,
    entry.support,
    entry.comments,
  ];
  pool
    .query(sqlQuery, sqlParams)
    .then(() => {
      res.sendStatus(200);
      console.log("post success");
    })
    .catch((err) => {
      console.log("error in POST", err);
      res.sendStatus(500);
    });
});
