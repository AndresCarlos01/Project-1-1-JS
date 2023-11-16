"use strict";
$(document).ready(function () {
  $("main a").on("click", function (event) {
    // Check if the clicked link is not part of the navbar
    if (!$(this).closest(".navbar").length) {
      event.preventDefault();

      const clickedLink = $(this);
      const targetDiv = clickedLink.prevAll(".hide:first");

      targetDiv.slideToggle(200, function () {
        const newText = targetDiv.is(":visible") ? "Show less" : "Show more";
        clickedLink.text(newText);
      });
    }
  });
});
