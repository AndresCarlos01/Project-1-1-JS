"use strict";

const $ = (selector) => document.querySelector(selector);

// Add an event listener when the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add event handler for the "Calculate" button
  $("#calculate").addEventListener("click", processEntry);
});

function processEntry() {
  // Get the user's input from the "income" input field
  const entry = parseFloat($("#income").value);

  // Check if the entry is a valid number greater than zero
  if (isNaN(entry) || entry <= 0) {
    // Display an error message if the entry is not valid
    $("#tax").value =
      "Invalid entry. Please enter a valid number greater than zero.";
  } else {
    // Call the calculateTax() function and display the result
    const tax = calculateTax(entry);
    $("#tax").value = tax.toFixed(2); // Round to two decimal places
  }
  // Move the focus back to the "income" input field
  $("#income").focus();
}

// calculateTax function to calculate the tax
function calculateTax(income) {
  if (income <= 9875) {
    return income * 0.1; // Calculate 10% tax
  } else if (income <= 40125) {
    return 9875 * 0.1 + (income - 9875) * 0.12; // Calculate 12% tax
  } else if (income <= 85525) {
    return 9875 * 0.1 + (40125 - 9875) * 0.12 + (income - 40125) * 0.22; // Calculate 22% tax
  } else if (income <= 163300) {
    return (
      9875 * 0.1 +
      (40125 - 9875) * 0.12 +
      (85525 - 40125) * 0.22 +
      (income - 85525) * 0.24
    ); // Calculate 24% tax
  } else if (income <= 207350) {
    return (
      9875 * 0.1 +
      (40125 - 9875) * 0.12 +
      (85525 - 40125) * 0.22 +
      (163300 - 85525) * 0.24 +
      (income - 163300) * 0.32
    ); // Calculate 32%  bracket
  } else if (income <= 518400) {
    return (
      9875 * 0.1 +
      (40125 - 9875) * 0.12 +
      (85525 - 40125) * 0.22 +
      (163300 - 85525) * 0.24 +
      (207350 - 163300) * 0.32 +
      (income - 207350) * 0.35
    ); // Calculate 35% tax
  } else {
    return (
      9875 * 0.1 +
      (40125 - 9875) * 0.12 +
      (85525 - 40125) * 0.22 +
      (163300 - 85525) * 0.24 +
      (207350 - 163300) * 0.32 +
      (518400 - 207350) * 0.35 +
      (income - 518400) * 0.37
    ); // Calculate 37% tax
  }
}
