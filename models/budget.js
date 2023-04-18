/*
id - A unique number for each item
item_name- string - name of the transaction (ie: income, savings, cat food, etc.)
amount -number - amount of the transaction
date- string - the date should be simple string. bonus use the date object and date input field and format human-readable
from - string - transaction was with (ie. employer, bank, pet store, grocery store, etc)
category - string - category this fall into (income, savings, pets, food, etc)
*/

module.exports = [
  {
    id: "A1",
    item_name: "income",
    amount: 3000,
    date: "04/11/23",
    from: "employer",
    category: "income",
  },
  {
    id: "A2",
    item_name: "savings",
    amount: 3000,
    date: "03/11/23",
    from: "bank",
    category: "savings",
  },
  {
    id: "A3",
    item_name: "Taxes",
    amount: -300,
    date: "2023-04-09",
    from: "employer",
    category: "Deduction",
  },

  {
    id: "A4",
    item_name: "cat food",
    amount: 50,
    date: "02/12/23",
    from: "pet-co",
    category: "pets",
  },
];
