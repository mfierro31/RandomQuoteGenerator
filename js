var quotes = [
  {quote: "What splendid women's quarters.",
  author: "King Agesilaus, upon being shown the huge defensive walls of a neighboring city"}, 
  {quote: "These are Sparta's walls.",
  author: "King Agesilaus, while pointing at his men"},
  {quote: "Come and take them!",
  author: "King Leonidas, responding to the Persian commander telling them to lay down their weapons"},
  {quote: "If.",
  author: "Unnamed Spartan, replying to Philip II of Macedon's threat - 'If once I enter your territories, I will destroy ye all, never to rise again.'"},
  {quote: "Neither.",
  author: "Unnamed Spartan, replying to Philip II of Macedon's question - 'Do you want me to enter your lands as friend or foe?'"},
  {quote: "With it or on it.",
  author: "Spartan mothers, as they sent their sons off to war"},
  {quote: "It will be the size of a lion when I bore down on my enemies.",
  author: "Unnamed Spartan soldier, when asked why he'd drawn a fly on his shield, instead of something more intimidating"},
  {quote: "Dig it out for yourselves.",
  author: "King Leonidas, after kicking a Persian down a well who was demanding a sacrifice of earth and water"},
  {quote: "So that we may get close to the enemy.",
  author: "Unnamed Spartan soldier, after being asked why Spartans fight with short swords"},
  {quote: "Because we are also the only ones who give birth to men.",
  author: "Queen Gorgo, after being asked, 'Why are you Spartan women the only ones who can rule men?'"}
];

var displayedQuote;
var currentIdx;

function updateQuote() {
  do {
    var idx = Math.floor(Math.random() * quotes.length);
  } while(currentIdx === idx)
  
  displayedQuote = quotes[idx];
  
  currentIdx = idx;
  $('#quote').html(quotes[idx].quote);
  $('#author').html(quotes[idx].author);
}

$(function() {
  updateQuote();
  $('#generator').click(updateQuote);
})
