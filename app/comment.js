var main = function() {
  "use strict";

  var addcomment = function() {
    // a variable to hold DOM element
    // declare the type of object
    var $new_comment = $("<p>");
    var content = $(".comment-input input").val();
    // add content
    if (content !== "") {
      $new_comment.text(content);
      $new_comment.hide();
      $(".comments").append($new_comment);
      $new_comment.fadeIn();
      // reset input to the value of ""
      $(".comment-input input").val("");
    }
  };

  $(".comment-input button").on("click", function(event) {
    addcomment();
  });

  $(".comment-input input").on("keypress", function(event) {
    if (event.keyCode === 13) {
      addcomment();
    }
  });
};

$(document).ready(main);
