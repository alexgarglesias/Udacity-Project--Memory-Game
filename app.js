

 // Create a list that holds all of your cards

let cards = ["fa-diamond","fa-paper-plane-o", "fa-bolt", "fa-cube", "fa-anchor", 
  "fa-leaf", "fa-bicycle", "fa-bomb","fa-diamond","fa-paper-plane-o","fa-bolt","fa-cube",
  "fa-anchor","fa-leaf","fa-bicycle","fa-bomb"];

const single = document.querySelectorAll('.card i');

const classes = document.querySelectorAll('i .fa');

const stars = document.querySelectorAll('.stars .fa');

const moves = document.querySelector('.moves');

const showCard = document.querySelectorAll('.deck');

const showSingle = document.querySelectorAll('.deck .card');

	
//Display the cards on the page
 //  - shuffle the list of cards using the provided "shuffle" method 

function shuffle(array) {
let currentIndex = array.length, temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    };

    return array
    };

cards= shuffle(cards);

// loop through each card and create its HTML

for (z=0; z<single.length; z++){
// add each card's HTML to the page
  single[z].classList.add(cards[z]);

const solution = (single[z].className);
};
	//set up the event listener for a card. If a card is clicked://

for (var i = 0; i <showSingle.length; i++) {

  showSingle[i].addEventListener('click', flipCard, true);
};

	//display the card's symbol (put this functionality in another function that you call from this one)//

const oneCard= document.querySelectorAll('.card');

function flipCard(e){ 

let matchCards=[];

let classChecking = event.target.className;
	
if (matchCards.includes(classChecking)){

} else {
  event.target.classList.toggle('match');
}

let openCards=[];


for (let i=0; i<oneCard.length; i++){

  if (oneCard[i].classList.contains("match")){

    openCards.push(oneCard[i].children[0].className);
};
};

// Matching 2 cards

if (openCards[0]===openCards[1] && openCards.length>1){
  alert('GOOD MATCH');
 
  matchCards.push(openCards[0]);
  matchCards.push(openCards[1]);

  openCards= [];

console.log(matchCards);

 setTimeout(function(){

 }, 2500);

//Not matching

}else if (openCards[0]!==openCards[1] && openCards.length===2){

   setTimeout(function(){
   alert('Wrong match');
  },1000);

 setTimeout(function(){
 for (var i = 0; i <showSingle.length; i++) {

  showSingle[i].classList.remove('match');

// Remove one Star

  for (var z = 0; z <stars.length; z++) {
   stars[0].classList.remove('fa-star');


// decrease moves

moves.textContent = 2;

};
};
  },2000);

};
};










/*
 
 for (var i = 0; i <showSingle.length; i++) {

  showSingle[i].classList.remove('match')


function restart(){


if (openCards.length===1){

console.log('match')

} else if (openCards.length===2) {
  console.log('not match!')
}


setTimeout(function hideCards(){

let flopCard = document.querySelectorAll('li')

if (flopCard[0].className !== flopCard[1].className){

for(let t = 0; t <flopCard.length; t++) {

flopCard[t].classList.remove('match')
}
}

}, 2000)




/*
function destroyer(arr) {

var final = arr.filter(function(number){

      return number>2 


})

var total= [];
for (var i=0; i<final.length;i++){

if (total.indexOf(final[i])!== -1){

total.push(final[i])

}
}

  // Remove all the values
  console.log(total);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*
function mutation(arr) {

  var total = []

  for (var i=0; i<arr[1].length; i++){

    total.push(arr[1][i])

    if (arr[0].indexOf(total[i])!== -1){
     console.log(total.join('').toLowerCase())
    }
  }




 
}

mutation(["hello", "DFDFey"]);



*/

/*

function mutation(arr) {

  var total = []

  var splitTarget = arr[1].split('')

  var splitOrigin = arr[0].split('')

  for (var i=0; i<splitTarget.length; i++){

    if (splitOrigin.indexOf(splitTarget[i])!== -1){

    total.push(splitTarget[i])


    }



}
 

 console.log(total)
 
}

mutation(["hello", "Hey"]);


*/


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


