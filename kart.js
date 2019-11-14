const body = document.querySelector('.body');
const container = document.querySelector('.container');
const dimmer = document.querySelector('.dimmer');
let flipped = null;
const containerWidth = container.getBoundingClientRect().width;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const cardWidth = 250;
const cardHeight = 400;

let leftMarginPar = 5
let leftMarginParFixer = leftMarginPar - 1 



let leftMargin = cardWidth / leftMarginPar

let cardCount = Math.floor((containerWidth / (cardWidth / leftMarginPar)) - leftMarginParFixer)
const cardWidthPercent = 100 * (cardWidth / windowWidth).toFixed(4);

let atStarting = true;

console.log(containerWidth);




body.addEventListener('click', function (e) {
  console.log(atStarting)
  
  if (atStarting) {
  
  const card = e.target.parentElement.parentElement ;  
  if (card.classList[0] === 'ccon' && !card.classList.contains('flipped')) {    
    if (flipped !== null) {
      const current = document.querySelector('.flipped');
      current.classList.remove('flipped');      
     
    }    
    card.classList.add('flipped'); 
    flipped = card.style.zIndex
    card.style.zIndex = '1000'
    
    dimmer.classList.add('visible')
    
    console.log('>>>',flipped);
    
  }
  
  if (e.target.classList[0] === 'dimmer') {
    const current = document.querySelector('.flipped');
    dimmer.classList.remove('visible')
    current.classList.remove('flipped');    
    current.style.zIndex = flipped;
    flipped = null;
    
    }      
  }

  // Prevent fast click conflicts
  
    
    
  
  
  // card.style.webkitTransform = transform;
  // card.style.msTransform = transform;
  
  e.preventDefault();
  
})

let cardData = [];
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//Make an HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);
  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };
  this.http.send();
};

const getCards = new easyHTTP()

const putCards = function (cardData) { 
  
  for (let index = 0; index<45; index++){
    
    const cardContainer = document.createElement('div');
    cardContainer.className = 'ccon'
    const card = document.createElement('div');
    card.className = 'card card-' + index;
    const cardFront = document.createElement('div');
    cardFront.className = 'front front-' + index;

    
    const cardBack = document.createElement('div');
    cardBack.className = 'back back-' + index;
    cardBack.innerHTML = '<strong>' + cardData[index].id + '</strong><h3>'+cardData[index].title+'</h3><p>'+cardData[index].body+'</p>';
    cardFront.innerHTML = ''
    card.appendChild(cardBack);
    card.appendChild(cardFront);

    cardContainer.appendChild(card)

    cardContainer.style.top = (Math.floor(index / cardCount)) * (cardHeight+30) + 'px';
    cardContainer.style.left = (index % cardCount) * leftMargin + 'px'; 
    cardContainer.style.zIndex = index;
    cardContainer.style.width = cardWidthPercent+'%'
    cardContainer.style.height = cardHeight+'px'


    
    
    
    
    container.appendChild(cardContainer); 
    
  }


 
  //console.log('>>',cardData);
}

getCards.get('https://jsonplaceholder.typicode.com/posts', function (err,res) {
  if (err) {
    return console.log(err)  ;
  } else {    
    putCards(JSON.parse(res));
  }
})



