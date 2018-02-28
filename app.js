

 // Create a list that holds all of your cards

 let cards = ["fa-diamond","fa-paper-plane-o", "fa-bolt", "fa-cube", "fa-anchor", 
  "fa-leaf", "fa-bicycle", "fa-bomb","fa-diamond","fa-paper-plane-o","fa-bolt","fa-cube",
  "fa-anchor","fa-leaf","fa-bicycle","fa-bomb"]



  let numberOfCards = cards.length

  let single = document.querySelectorAll('.card i')

   
	
//Display the cards on the page
 //  - shuffle the list of cards using the provided "shuffle" method 

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

return array
    
}

  cards= shuffle(cards)


// loop through each card and create its HTML

for (z=0; z<single.length; z++){


// add each card's HTML to the page

	single[z].classList.add(cards[z])
     
     }



let showCard = document.querySelectorAll('.deck')




	//set up the event listener for a card. If a card is clicked://

for (var i = 0; i <showCard.length; i++) {

  showCard[i].addEventListener('click', flipCard, true);

}

	//display the card's symbol (put this functionality in another function that you call from this one)//



  let openCards=[]

function flipCard(e){
	
	e.target.classList.toggle('match')
  openCards.push(e.target)

  let first = openCards[0].childNodes

  console.log(first.className)
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
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


