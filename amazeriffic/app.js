var main = function() {
  "use strict";
  var New = [
    "Finish writing this book",
    "Take Gracie to the park",
    "Answer emails",
    "Prep for Monday's class",
    "Make up some new ToDos",
    "Get Groceries"
  ];
  var Old = [
    "Get Groceries",
    "Make up some new ToDos",
    "Prep for Monday's class",
    "Answer recruiter emails on LinkedIn",
    "Take Gracie to the park",
    "Finish writing book",
  ];

  function createlist(list) {
    var $li = $("li");
    list.forEach(function(ul){
      $li.append($("ul").text(ul));
    });
    return $li;
  }

  $(".tabs a span").toArray().forEach(function(element) {

    $(element).on("click", function() {

      var $element = $(element);

      $(".tabs a span").removeClass("active");
      $element.addClass("active");
      $("main .content").empty();

      if ($element.parent().is(":nth-child(1)")) {
        $("main .container").append(createlist(New));
      } else if ($element.parent().is(":nth-child(2)")) {
        $("main .container").append(createlist(Old));
      } else if ($element.parent().is(":nth-child(3)")) {
        pass;
      }
      return false;
    });
  });
};

$(document).ready(main);
