const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", async (req, res) => {
  const data = await burger.all();

  res.render("index", { burger: data });
});

router.post("/api/burger", async (req, res) => {
  const data = await burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured]);

  res.json({ id: data.insertId });
});

router.put("/api/burger/:id", async (req, res) => {
  let condition = `id = ${req.params.id}`;

  console.log("condition", condition,);

  const data = await burger.update({ devoured: 1}, condition);

  if (data.changedRows === 0) {
    res.status(404).end();
  }

  res.status(200).end();
});


// Export routes for server.js to use.
module.exports = router;
