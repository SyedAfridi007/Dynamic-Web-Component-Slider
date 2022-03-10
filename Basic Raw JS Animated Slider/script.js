let body = document.querySelector('body')
let cards = document.querySelectorAll('.card');
let card = document.querySelector('.card');

console.log(cards.length);
let count = 1;

setInterval(() => {
count ++;
let currentCard = document.querySelector('.active');
currentCard.classList.remove('active');
if(count > cards.length){
    cards[0].classList.add('active');
    count = 1;
}else{
    currentCard.nextElementSibling.classList.add('active');
}
}, 2500)




let btn = document.querySelector('.btn').addEventListener('click', function(){
    body.classList.toggle('nightMode')
})


