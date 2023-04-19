/*
id - A unique number for each item
item_name- string - name of the transaction (ie: income, savings, cat food, etc.)
amount -number - amount of the transaction
date- string - the date should be simple string. bonus use the date object and date input field and format human-readable
from - string - transaction was with (ie. employer, bank, pet store, grocery store, etc)
category - string - category this fall into (income, savings, pets, food, etc)
*/
const { v4: uuidv4 } = require("uuid");
module.exports = [
  {
    id: uuidv4(),
    item_name: "income",
    amount: 3000,
    date: "2023-02-06",
    from: "employer",
    category: "income",
    isWithdrawal: false,
  },
  {
    id: uuidv4(),
    item_name: "savings",
    amount: 3000,
    date: "2023-02-03",
    from: "bank",
    category: "savings",
    isWithdrawal: false,
  },
  {
    id: uuidv4(),
    item_name: "Taxes",
    amount: 300,
    date: "2023-03-11",
    from: "employer",
    category: "Deduction",
    isWithdrawal: true,
  },

  {
    id: uuidv4(),
    item_name: "cat food",
    amount: 50,
    date: "2023-08-12",
    from: "pet-co",
    category: "pets",
    isWithdrawal: false,
  },
];
