const express = require("express");
const budgets = express.Router();
const budgetsArray = require("../models/budget.js");
const budgetValidator = require("../models/validators.js");


budgets.get("/", (req, res) => {
  res.json(budgetsArray);
});

// SHOW budget transactions

budgets.get("/:arrayIndex", (req, res) => {
  if (budgetsArray[req.params.arrayIndex]) {
    res.json(budgetsArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
    res.redirect("/budgets");
  }
});

// CREATE

budgets.post("/", (req, res) => {
  budgetsArray.push(req.body);
  res.json(budgetsArray[budgetsArray.length - 1]);
});

// DELETE

budgets.delete("/:arrayIndex", (req, res) => {
  if (budgetsArray[req.params.arrayIndex]) {
    const deletedBudgets = budgetsArray.splice(req.params.arrayIndex, 1);
    res.status(200).json(deletedBudgets);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// UPDATE

budgets.put("/:index", budgetValidator, (req, res) => {
  const { index } = req.params;
  if (budgetsArray[index]) {
    budgetsArray[index] = req.body;
    res.status(200).json(budgetsArray[index]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});


module.exports = budgets;
