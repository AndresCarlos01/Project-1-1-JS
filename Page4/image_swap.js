"use strict";

$(document).ready(() => {
  // preload images
  $("#image_list a").each((index, element) => {
    const swappedImage = new Image();
    swappedImage.src = $(element).attr("href");
  });

  // set up event handlers for links
  $("#image_list a").click((evt) => {
    evt.preventDefault();

    const link = $(evt.currentTarget);
    const imageURL = link.attr("href");
    const caption = link.attr("title");

    // hide new image and caption initially
    $("#image, #caption").hide();

    // fade out old image
    $("#image").fadeOut(1000, () => {
      // set the new image source
      $("#image").attr("src", imageURL);

      // fade out old caption
      $("#caption").fadeOut(1000, () => {
        // set the new caption after fade-out is complete
        $("#caption").text(caption);

        // fade in new image and caption
        $("#image, #caption").fadeIn(1000);
      });
    });
  });

  // move focus to first thumbnail
  $("li:first-child a").focus();
}); // end ready
