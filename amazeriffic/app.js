var main = function() {
  "use strict";
  var ToDo = ["Finish coding this page", "Answer emails", "Get Groceries"];

  var Done = ["Purchase laptop"];

  function create_content(alist) {
    var $content = $("<ul>");
    alist.forEach(function(todo) {
      $content.append($("<li>").text(todo));
    });
    return $content;
  }

  $(".tabs a span").toArray().forEach(function(element) {
    // create a click handler for this element
    $(element).on("click", function() {

      var $element = $(element);

      $(".tabs a span").removeClass("active");
      $element.addClass("active");
      $("main .content").empty();

      if ($element.parent().is(":nth-child(1)")) {
        $("main .content").append(create_content(ToDo));
      }
      else if ($element.parent().is(":nth-child(2)")) {
        $("main .content").append(create_content(Done));
      }
      else if ($element.parent().is(":nth-child(3)")) {
        console.log("THIRD TAB CLICKED!");
      }
      return false;
    });
  });

};

$(document).ready(main);
