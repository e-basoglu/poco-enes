/* 
36 cards => 18 pairs
shuffle the cards
cards shown face down on the board (in the DOM)
click handler to flip the card around
matching pair found gets disabled (remove or hide or disable)
scoring - low priority
Bonus: have multiple players (at least 2)
*/

class Card {
    constructor(id, pair_id, face, bgcolor, visible = false, matched = false){
        this.id = id;
        this.pair_id = pair_id;
        this.face = face;
        this.bgcolor = bgcolor;
        this.visible = visible;
        this.matched = matched;
    }
    //in the class, we do not write function keyword
    flipCard(){
        this.visible = !this.visible;
    }

    foundMatch(){
        this.matched = true;
    }
}

const cards = [];
let flippedCards = [];
const pairs = 18;
const pTag = document.querySelector('p');



const CSS_COLOR_NAMES = ['#F0F8FF','#FAEBD7','#00FFFF','#7FFFD4','#F0FFFF','#F5F5DC','#FF7F50','#6495ED','#FFF8DC','#DC143C','#00FFFF','#00008B','#4682B4','#D2B48C','#008080','#D8BFD8','#FF6347','#40E0D0','#EE82EE','#F5DEB3','#FFFFFF','#F5F5F5','#FFFF00','#9ACD32'];

generateCards();
shuffleCards();
setBoard();


function generateCards(){
    for(let i=1; i<=pairs; i++){
        for(let y=0; y<2; y++){
            cards.push(new Card(`${y}_${i}`, i, i, CSS_COLOR_NAMES[i]));
        }
    }
}

function shuffleCards(){
    for(let i = cards.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

function setBoard(){
    const ulTag = document.createElement('ul');
    pTag.after(ulTag);

    for(const card of cards){
        const liTag = document.createElement('li');

        const front = document.createElement('div');
        front.textContent = card.face;
        front.style.backgroundColor = card.bgcolor;
        front.classList.add('front');

        const back = document.createElement('div');
        back.classList.add('back');

        liTag.addEventListener('click', e => {
            //check for disabled
            if(!card.matched){
            card.flipCard();
            liTag.classList.toggle("flipped");
           trackFlippedCards(card);
        }
        });

        liTag.appendChild(front);
        liTag.appendChild(back);
        ulTag.appendChild(liTag);
    }
}

function trackFlippedCards(card){
    if(card.visible){
        flippedCards.push(card);
        if(flippedCards.length === 2){
            setTimeout(checkForMatch, 1000);            
        } 
        // to do ELSE - if more than 2, remove and unflip first 2 
    } 
    //to do ELSE - if it is in there, remove it
}
function checkForMatch(){
    //check for pair_id, face, bgcolor
    //check for flipped elements in dom and compare front div
    if(flippedCards[0].pair_id === flippedCards[1].pair_id){
        //score +1
        flippedCards[0].foundMatch();
        flippedCards[1].foundMatch();
        flippedCards = [];
    } else {
        flippedCards[0].flipCard();
        trackFlippedCards(flippedCards[0]);
        flippedCards[1].flipCard();
        trackFlippedCards(flippedCards[1]);
        flippedCards = [];

        //find the flipped elements in DOM and remove class
        let flippedElms = document.querySelectorAll(".flipped:not(.disabled)");
        for(elm of flippedElms){
            elm.classList.remove("flipped");
        }
    }
}




