var p1Cards = [];
var pcCards = [];


const fullDeck = [
    {full: 'S1', suit: 'S', num: '1'},
    {full: 'S2', suit: 'S', num: '2'},
    {full: 'S3', suit: 'S', num: '3'},
    {full: 'S4', suit: 'S', num: '4'},
    {full: 'S5', suit: 'S', num: '5'},
    {full: 'S6', suit: 'S', num: '6'},
    {full: 'S7', suit: 'S', num: '7'},
    {full: 'S8', suit: 'S', num: '8'},
    {full: 'S9', suit: 'S', num: '9'},
    {full: 'S10', suit: 'S', num: '10'},
    {full: 'S11', suit: 'S', num: '11'},
    {full: 'S12', suit: 'S', num: '12'},
    {full: 'S13', suit: 'S', num: '13'},
    {full: 'H1', suit: 'H', num: '1'},
    {full: 'H2', suit: 'H', num: '2'},
    {full: 'H3', suit: 'H', num: '3'},
    {full: 'H4', suit: 'H', num: '4'},
    {full: 'H5', suit: 'H', num: '5'},
    {full: 'H6', suit: 'H', num: '6'},
    {full: 'H7', suit: 'H', num: '7'},
    {full: 'H8', suit: 'H', num: '8'},
    {full: 'H9', suit: 'H', num: '9'},
    {full: 'H10', suit: 'H', num: '10'},
    {full: 'H11', suit: 'H', num: '11'},
    {full: 'H12', suit: 'H', num: '12'},
    {full: 'H13', suit: 'H', num: '13'},
    {full: 'C1', suit: 'C', num: '1'},
    {full: 'C2', suit: 'C', num: '2'},
    {full: 'C3', suit: 'C', num: '3'},
    {full: 'C4', suit: 'C', num: '4'},
    {full: 'C5', suit: 'C', num: '5'},
    {full: 'C6', suit: 'C', num: '6'},
    {full: 'C7', suit: 'C', num: '7'},
    {full: 'C8', suit: 'C', num: '8'},
    {full: 'C9', suit: 'C', num: '9'},
    {full: 'C10', suit: 'C', num: '10'},
    {full: 'C11', suit: 'C', num: '11'},
    {full: 'C12', suit: 'C', num: '12'},
    {full: 'C13', suit: 'C', num: '13'},
    {full: 'D1', suit: 'D', num: '1'},
    {full: 'D2', suit: 'D', num: '2'},
    {full: 'D3', suit: 'D', num: '3'},
    {full: 'D4', suit: 'D', num: '4'},
    {full: 'D5', suit: 'D', num: '5'},
    {full: 'D6', suit: 'D', num: '6'},
    {full: 'D7', suit: 'D', num: '7'},
    {full: 'D8', suit: 'D', num: '8'},
    {full: 'D9', suit: 'D', num: '9'},
    {full: 'D10', suit: 'D', num: '10'},
    {full: 'D11', suit: 'D', num: '11'},
    {full: 'D12', suit: 'D', num: '12'},
    {full: 'D13', suit: 'D', num: '13'}

var deck = fullDeck;

function dealCards() {
    var i;
    for(i = 0; i < 5; i++) {
        var index = parseInt(Math.random() * deck.length);
        p1Cards.push(deck[index]);
        deck.splice(index, 1);
        index = parseInt(Math.random() * deck.length);
        pcCards.push(deck[index]);
        deck.splice(index, 1);
    }
}

//start();

function start() {
    dealCards();
    console.log(p1Cards)
    console.log(pcCards)
}


