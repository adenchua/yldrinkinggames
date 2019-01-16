const cardList = [
  "The person who last used the bathroom drinks",
  "You drink",
  "Everyone wearing a top with buttons drink",
  "Everyone who is shorter than you drinks",
  "Everyone who is taller than you drinks",
  "Everyone who wears a watch drinks",
  "Everyone who is single drinks",
  "Flip a coin, if it is head, you drink. If it is tails, everyone else drinks",
  "Pick a person and start a staring contest. Loser drinks",
  "Everyone else drinks except you",
  "Tell a joke. If no one chuckles or laughs, you drink",
  "Everyone starts voting on another person. The person with the most votes drink.",
  "The next person in turn drinks",
  "Everyone whose phone is not in their pocket drinks",
  "Everyone keep their head down. On the count of three, raise your head and stare at someone. Anyone who exchanged stares drinks.",
  "The last person who stands up drink",
  "The person who frequents the toilet the most drinks",
  "Vote a person who most likely goes to bed by 10pm. That person drinks",
  "Vote a person who most likely has the dirtiest mind. That person drinks",
  "Everyone who uses an Iphone drinks",
  "Last person who sticks out their tongue drinks",
  "Last person who puts their finger on their nose drinks",
  "Everyone who is younger than you drinks",
  "Keep your eyes closed until it is your turn again. If you open your eyes, drink.",
  "The person who most recently posted on instagram drinks",
  "Everyone takes out a coin from their wallet. The person with the smallest denomination picks someone else to drink. If no one has a coin, everyone drinks",
  "On the count of three everyone gives a thumbs up or thumbs down. Those that gave the opposite of you drinks.",
  "Play a rock-paper-scissors with everyone in a clockwise direction. Loser drinks",
  "On the count of three everyone gives a number from 1-5 using their left hand. Those that gives a different number from yours drink",
  "Double attack. Keep this card. Next time a person drinks, you can force them to drink double."
];

var count = 0;

//This function changes the text of the card whenever "Next Card" button is clicked
function revealNextCard() {
  console.log("Button clicked");
  if (count == 0) {
    //shuffles the card deck at the start
    shuffle(cardList);
  }
  let element = document.getElementById("cardContent");

  if (count == cardList.length) {
    element.innerHTML =
      "You have reached the end of the decklist. Thank you for playing!";
    return;
  }
  element.innerHTML = cardList[count];
  count = count + 1;
  console.log(count);
}

//this function shuffles a given array
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
