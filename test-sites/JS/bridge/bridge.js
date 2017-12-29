// create an empty array
var cards = [];

// push the two of hearts onto the array
cards.push( {"rank": "two", "suit":"hearts"} );
cards.push( {"rank": "ace", "suit":"spades"} );
cards.push( {"rank": "five", "suit":"spades"} );
cards.push( {"rank": "king", "suit":"clubs"} );
cards.push( {"rank": "seven", "suit":"diamonds"} );

// print the first and third card in the hand
console.log(cards[0]);
//=> Object {rank: "two", suit: "hearts"}

console.log(cards);
//=> Object {rank: "five", suit: "spades"}

// we create a JSON string with single quotes
var jsonString = '{"rank":"ten", "suit":"hearts"}'

// JSON.parse converts it into an object
var card = JSON.parse(jsonString);

console.log(card.rank);
//=> "ten"

console.log(card.suit);
//=> "hearts"
