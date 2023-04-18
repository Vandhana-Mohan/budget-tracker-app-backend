const express = require("express");
const budgets = express.Router();
const budgetsArray = require("../models/budget.js");
const budgetValidator = require("../models/validators.js");


budgets.get("/", (req, res) => {
  res.json(budgetsArray);
});



module.exports = budgets;
