var button = document.querySelector('.btn-add-cards');
var ul = document.querySelector('#items-list');

var cards = ['1_spade.png','2_heart.png','4_spade.png','6_diamond.png','7_club.png','queen_heart.png','king_diamond.png','8_spade.png','3_diamond.png','5_club.png','10_club.png','jack_spade.png','9_club.png'];

var handleClick = function(){
  var li = document.createElement("li");
  li.style.backgroundImage = "url('images/carta2.png')";
  li.style.width = "141px";
  li.style.height = "205px";
  li.style.backgroundSize = "cover";
  ul.style.display = "flex";
  ul.style.justifyContent = "space-between";
  //cards.push(li);
  ul.appendChild(li);
}

button.addEventListener('click', handleClick);

ul.addEventListener('click', function(event) {
  var clickedCard = event.target;
  var random = Math.floor(Math.random() * cards.length);
  clickedCard.style.backgroundImage = "url('images/" + cards[random] +"')";
  cards.splice(random,1);
})


