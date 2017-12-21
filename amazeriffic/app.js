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

  var addcomment = function() {
    var newtodo = $(".add input").val();
    if (newtodo != "") {
      ToDo.push(newtodo);
      $(".tabs a:first-child span").trigger("click");
    }
  };

  $(".add button").on("click", function() {
    console.log("button pressed");
    addcomment();
  });

  $(".add input").on("keypress", function(event) {
    if (event.keyCode === 13) {
      addcomment();
    }
  });

  $(".tabs a span").toArray().forEach(function(element) {
    // create a click handler for this element
    $(element).on("click", function() {
      $("main .content .todo").hide();
      $("main .content .add").hide();
      var $element = $(element);

      $(".tabs a span").removeClass("active");
      $element.addClass("active");
      $("main .content .todo").empty();

      if ($element.parent().is(":nth-child(1)")) {
        $("main .content .todo").append(create_content(ToDo));
        $("main .content .todo").fadeIn();
      } else if ($element.parent().is(":nth-child(2)")) {
        $("main .content .todo").append(create_content(Done));
        $("main .content .todo").fadeIn();
      } else if ($element.parent().is(":nth-child(3)")) {
        $("main .content .add").fadeIn();
      }
      return false;
    });
  });
  $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);
