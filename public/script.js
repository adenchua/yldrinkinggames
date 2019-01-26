const cardList = [
  "Everyone else drinks except you",
  "The person who frequents the toilet the most drinks",
  "Everyone who uses an Iphone drinks",
  "Everyone who is younger than you drinks",
  "The person who most recently posted on instagram drinks",
  "Pick someone and guess the color of their underwear. If you guess correctly, they drink, otherwise you drink.",
  "Last person to clap their hands drink",
  "Everyone born in the same month as you drinks",
  "The person after you drinks",
  "Pick an animal and act out this animal without talking. First person to guess correctly picks someone to drink.",
  "Switch shirts with the person after you for the remainder of the game. If you physically cannot or if they refuse, you drink.",
  "You drink",
  "You drink",
  "You drink",
  "You drink",
  "You drink",
  "Ask another player a true or false question about yourself. If they answer correctly you drink, otherwise they drink",
  "The person with the biggest ears drinks",
  "You must either take off an article of clothing or drink",
  "Everyone votes on who is the most likely to own ten cats. Everyone else drinks for that person",
  "All guys drink.",
  "The person who most recently posted on instagram drinks",
  "On the count of three, everyone holds either a thumbs-up or thumbs-down. Whoever does the opposite of you drinks",
  "After this card is read, everyone must play in silence until it is your turn again. First person to laugh or talk drinks and ends the silence",
  "The person before you drinks",
  "Make any action, the next person repeats all previous actions and add another. Continue on until someone messes up. That person drinks.",
  "Everyone wearing the same color shirt as you drinks",
  "On the count of three, start a group staring contest. Last person to blink picks someone to drink.",
  "Tell a joke. If no one chuckles or laughs, you drink.",
  "Everyone votes on who is the most likely to spend all their money on something stupid. That person drinks",
  "Everyone votes on who is most likely to be in bed by 10pm. That person drinks.",
  "Misery loves company. Keep this card. You can use this card once to force someone to drink with you.",
  "Everyone votes on who is the nicest. That person picks someone to drink.",
  "The person after you drinks",
  "Everyone votes on who is the most likely to dodge drinks. That person drinks",
  "Everyone must speak in third person until someone messes up. That person drinks",
  "Everyone older than you drinks.",
  "Flip a coin. If it's heads, you drink. if it's tails, everyone else drinks",
  "You are Simon. Everyone plays Simon Says. First person that messes up drinks.",
  "You cannot make eye contact with anyone until it is your turn again. if you do, you drink.",
  "Everyone who is single drinks",
  "Everyone votes for a person to drink.",
  "Everyone votes on who is the most indecisive. That person picks someone to drink.",
  "Act out a scene from the movie. First person to guess the movie correctly picks someone to drink.",
  "The person before you drinks.",
  "Pick a person and start a staring contest. Loser drinks",
  "Starting with you, take turns naming a beer brand. Continue until someone hesitates or repeats a brand. That person drinks.",
  "All players must only speak with one syllable words until someone messes up. That person drinks.",
  "Everyone votes on who is the most likely to get thrown out of a bar. That person drinks",
  "Everyone who is shorter than you drinks.",
  "Keep your eyes closed until it is your turn again. If you open your eyes, you drink.",
  "Last person to put their finger on their nose drinks",
  "Everyone wearing a watch drinks.",
  "Imitate another player. First person to guess correctly picks someone to drink.",
  "The person who most recently used the bathroom drinks.",
  "Starting with you, take turns naming a country. Continue until someone hesitates or repeat a country. That person drinks",
  "Everyone votes on who is the most likely to vomit after this game. That person picks someone to drink.",
  "Everyone who is taller than you drinks.",
  "Double attack. Keep this card. You can use it once to force a drinker to drink twice.",
  "Pick a person to play rock, paper, scisssors with. Loser drinks.",
  "Play rock paper scissors with everyone. Loser drinks.",
  "Everyone with longer hair than you drinks",
  "Pick a superhero and act out this superhero without talking. First person to guess correctly picks someone to drink.",
  "Everyone votes on who is the biggest asshole. That person drinks",
  "Without touching anything, everyone must balance on one leg. Last person to fall picks someone to drink.",
  "Everyone wearing a shirt with buttons drinks.",
  "Starting with you, take turns naming an animal. Continue until someone hesitates or repeats an animal. That person drinks.",
  "That person after you can dare you to do anything. You can either fulfill the dare or refuse the dare and drink.",
  "Pick a word. Everyone takes turns saying a word that rhymes with it. The person that hesitates or repeats a word drinks.",
  "Tell two truths and a lie. Anyone can answer and if the first answer is correct, you drink. Otherwise the person who answered drinks.",
  "The person with the biggest hands picks someone to drink.",
  "All girls drink",
  "Swap attack. Keep this card. You can use it once to force someone else to drink instead of you.",
  "Everyone votes on who is the most likely to get arrested. That person drinks",
  "The person with the longest first name drinks. If there is a tie they both drink.",
  "Everyone votes on who is the biggest alcoholic. That person drinks and also picks another person to drink.",
  "Last person who drank picks someone to drink",
  "Everyone with an Android phone drinks.",
  "Everyone votes on who is the most likely to argue with a stranger. That person drinks.",
  "Everyone wearing long pants drinks",
  "Last person to stick out their tongue drinks",
  "Hum a song of your choice. First person to guess correctly picks someone to drink.",
  "The person with the shortest last name drinks. If theres a tie they both drink.",
  "Starting with you, take turns naming a fruit. Continue until someone hesitates or repeats a fruit. That person drinks.",
  "That person after you can ask you any question. You can either answer truthfully or refuse to answer and drink.",
  "Starting with you, take turns naming a color. Continue until someone hesitates or repeats a color. That person drinks",
  "Everyone wearing glasses drinks."
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
