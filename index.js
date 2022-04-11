//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
//}// Code your solutions in this file

const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for (let i = 0; i <gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);


const cards = ['Charlie', 'Samip', 'Ali'];

function writeCards(cards) {
    for (let i = 0; i <cards.length; i++) {
        return `Thank you, ${cards[i]}, for the wonderful birthday gift!`;
    } 

    return writeCards;
}

writeCards(cards);

let countDown = 10;
while (countDown > 0) {
    console.log(countDown--);
}

//function countDown() {
//    let i = 10;
//    while (countDown > 0) {
//        console.log(countDown--);
//    }
//}