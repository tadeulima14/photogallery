document.addEventListener('DOMContentLoaded', init);

const baseURL = 'images/';
const nxt = document.querySelector('.nxt');
const bck = document.querySelector('.prev');
const slide = document.querySelector('.pic');
let cars = ['280z.jpg', '300zx.jpg', 'cosworth.jpg', 'm3.jpg'];
let index = 0; //specifies that array starts at 1 because page loads with 0


nxt.onclick = function(e) { //e is event object
  e.preventDefault(); // ignores event so page wont reload

  slide.src = baseURL + cars[index];
  index = index + 1;
  console.log(index);

  if(index >= 3) {
    index = 0;
  }

};

//Add a previous button event listener

prev.onclick = function(e) { //e is event object
  e.preventDefault(); // ignores event so page wont reload

  slide.src = baseURL + cars[index];
  index = index - 1;
  console.log(index);

  if(index >= 3) {
    index = 0;
  }

};