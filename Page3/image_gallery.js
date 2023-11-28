// "use strict";

// $(document).ready(function () {
//   // Step 2: Use the each() method to run a function for each <a> element
//   $("#image_list a").each(function () {
//     // Step 3: Get the URL and caption for each image and preload the image
//     var imgUrl = $(this).attr("href");
//     var imgCaption = $(this).attr("title");
//     var img = new Image();
//     img.src = imgUrl;

//     // Step 4: Add an event handler for the click() event method of each link
//     $(this).click(function (evt) {
//       // Display the image and caption
//       $("#image").attr("src", imgUrl);
//       $("#caption").text(imgCaption);

//       // Cancel the default action of the link using the evt parameter
//       evt.preventDefault();
//     });
//   });

//   // Step 5: Move the focus to the first link on the page when the page is loaded
//   $("#image_list a:first").focus();
// });

"use strict";
$(document).ready(function () {
  // Step 2: Use the each() method to run a function for each <a> element
  $("#image_list a").each(function () {
    // Step 3: Get the URL and caption for each image and preload the image
    var imgUrl = $(this).attr("href");
    var imgCaption = $(this).attr("title");
    var img = new Image();
    img.src = imgUrl;

    // Step 4: Add an event handler for the click() event method of each link
    $(this).click(function (evt) {
      // Display the image and caption
      $("#image").attr("src", imgUrl);
      $("#caption").text(imgCaption);

      // Update the <h2> with the title of the clicked image
      $("#current-image-name").text(imgCaption);

      // Cancel the default action of the link using the evt parameter
      evt.preventDefault();
    });
  });

  // Step 5: Move the focus to the first link on the page when the page is loaded
  $("#image_list a:first").focus();
});
