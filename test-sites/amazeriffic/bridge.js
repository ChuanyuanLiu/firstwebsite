function main() {
  "use strict";

  console.log("Hello World!");

  $.getJSON("aceOfSpade.json", function(card) {
    // create an element to hold the card
    var $cardParagraph = $("<p>");

    // create the
    $cardParagraph.text(card.rank + " of " + card.suit);

    // append the card paragraph to main
    $("main").append($cardParagraph);
  });
}

$(document).ready(main);
