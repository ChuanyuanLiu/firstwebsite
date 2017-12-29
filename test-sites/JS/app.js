var main = function() {
  "use strict";

  $(".comment-input button").on("click", function() {
    // a variable to hold DOM element
    // declare the type of object
    var $new_comment = $("<p>");
    var content = $(".comment-input input").val();
      // add content
      $new_comment.text(content);
    $(".comments").append($new_comment);
  });
};

$(document).ready(main);
