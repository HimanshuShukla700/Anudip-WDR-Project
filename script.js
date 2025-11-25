// Get references to HTML elements by their IDs
const balance = document.getElementById("balance");       // Shows total balance
const money_plus = document.getElementById("money-plus"); // Shows total income
const money_minus = document.getElementById("money-minus"); // Shows total expense
const list = document.getElementById("list");             // <ul> to display transactions
const form = document.getElementById("form");             // The transaction form
const text = document.getElementById("text");             // Input field for description
const amount = document.getElementById("amount");         // Input field for amount

// Array to store all transactions (each transaction is an object)
let transactions = [];

// ---------------------------
// Function: Update balance, income, and expense
// ---------------------------
function updateValues() {
  // Create an array of only the 'amount' values from all transactions
  const amounts = transactions.map((t) => t.amount);

  // Calculate total balance (sum of all amounts)
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);

  // Calculate total income (sum of positive amounts)
  const income = amounts
    .filter((item) => item > 0)                // Keep only positive values
    .reduce((acc, item) => acc + item, 0)      // Add them up
    .toFixed(2);

  // Calculate total expense (sum of negative amounts, made positive for display)
  const expense = (
    amounts
      .filter((item) => item < 0)              // Keep only negative values
      .reduce((acc, item) => acc + item, 0) * -1 // Add them, multiply by -1 to make positive
  ).toFixed(2);

  // Update the UI with the calculated values
  balance.innerText = `₹${total}`;
  money_plus.innerText = `+₹${income}`;
  money_minus.innerText = `-₹${expense}`;
}

// ---------------------------
// Function: Add new transaction
// ---------------------------
function addTransaction(e) {
  e.preventDefault(); // Prevent form from reloading the page

  // Check if both input fields have values
  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please add text and amount"); // Show alert if empty
    return; // Stop execution
  }

  // Create a new transaction object
  const transaction = {
    id: Math.floor(Math.random() * 1000000), // Generate random unique ID
    text: text.value,                        // Get description text
    amount: +amount.value,                   // Convert string to number using '+'
  };

  // Add transaction to the array
  transactions.push(transaction);

  // Add the transaction to the DOM (visible list)
  addTransactionDOM(transaction);

  // Recalculate and update balance/income/expense
  updateValues();

  // Clear input fields after adding
  text.value = "";
  amount.value = "";
}

// ---------------------------
// Function: Add a transaction to the list (DOM)
// ---------------------------
function addTransactionDOM(transaction) {
  // Determine sign based on whether amount is positive or negative
  const sign = transaction.amount < 0 ? "-" : "+";

  // Create a new list item element
  const item = document.createElement("li");

  // Add class based on transaction type (for CSS styling)
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  // Set inner HTML of the <li> element with description, amount, and delete button
  item.innerHTML = `
    ${transaction.text} 
    <span>${sign}₹${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

  // Add the new <li> to the transaction list in the DOM
  list.appendChild(item);
}

// ---------------------------
// Function: Remove a transaction by its ID
// ---------------------------
function removeTransaction(id) {
  // Keep only those transactions whose id does NOT match the given id
  transactions = transactions.filter((t) => t.id !== id);

  // Re-initialize the UI after deletion
  init();
}

// ---------------------------
// Function: Initialize the app (clear list & show updated values)
// ---------------------------
function init() {
  list.innerHTML = ""; // Clear all list items from the UI

  // Add each transaction again to the list
  transactions.forEach(addTransactionDOM);

  // Update totals (balance, income, expense)
  updateValues();
}

// ---------------------------
// Event listener: When the form is submitted, call addTransaction()
// ---------------------------
form.addEventListener("submit", addTransaction);

// ---------------------------
// Run init() when the page first loads
// ---------------------------
init();
