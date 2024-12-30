const express = require("express");
const Budget = require("../models/Budget");

const router = express.Router();

router.post("/", async (req, res) => {
  const budget = new Budget(req.body);
  await budget.save();
  res.status(201).send(budget);
});

router.get("/:userId", async (req, res) => {
  const budgets = await Budget.find({ userId: req.params.userId });
  res.send(budgets);
});

module.exports = router;
