const budgetValidator = (req, res, next) => {
  const { id, item_name, amount, date, from, category } = req.body; //destructure properties from req.body object
  if (id && item_name && amount && date) {
    if (
      typeof id === "string" &&
      typeof item_name === "string" &&
      typeof amount === "number" &&
      typeof date === "string" &&
      (!from || typeof from === "string") &&
      (!category || typeof category === "string")
    ) {
      next();
    } else {
      res.status(400).json({ error: "Invalid transaction data" });
    }
  } else {
    res.status(400).json({ error: "Transaction data is missing" });
  }
};

module.exports = budgetValidator;
