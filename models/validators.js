const budgetValidator = (req, res, next) => {
  const { item_name, amount, date } = req.body;
  if (!item_name || !amount || !date) {
    return res
      .status(400)
      .json({ error: "Transaction must contain a name, amount and a date" });
  }
  next();
};

module.exports = budgetValidator;
