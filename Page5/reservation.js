"use strict";

$(document).ready(() => {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

  // 3. Move focus to the “Arrival date” text box
  $("#arrival_date").focus();

  // 4. Event handler for form submission
  $("#reservation_form").submit((event) => {
    // Reset previous error messages
    $("span").text("");

    // Validate Arrival date
    const arrivalDate = $("#arrival_date").val().trim();
    if (arrivalDate === "") {
      $("#arrival_date").next("span").text("* Required");
      event.preventDefault();
    }

    // Validate Nights (numeric)
    const nights = $("#nights").val().trim();
    if (isNaN(nights) || nights <= 0) {
      $("#nights")
        .next("span")
        .text("* Enter a valid numeric number of nights (Ex.2)");
      event.preventDefault();
    }

    // Validate Email address
    const email = $("#email").val().trim();
    if (!emailPattern.test(email)) {
      $("#email").next("span").text("* Enter a valid email address");
      event.preventDefault();
    }

    // Validate Name
    const name = $("#name").val().trim();
    if (name === "") {
      $("#name").next("span").text("* Required");
      event.preventDefault();
    }

    // Validate Phone (using a simple pattern for demonstration)
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const phone = $("#phone").val().trim();
    if (!phonePattern.test(phone)) {
      $("#phone")
        .next("span")
        .text("* Enter a valid phone number (e.g., 999-999-9999)");
      event.preventDefault();
    }

    $("#arrival_date").val(arrivalDate);
    $("#nights").val(nights);
    $("#email").val(email);
  });
}); // end ready
