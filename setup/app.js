const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.querySelector('#btn');
const centerSpan = document.querySelector('.color');
const backColor = document.querySelector('main');
//create a function that update color + span color in th;l

//diretly included this code in fct randomColor
// function randomNumber() {
//   return Math.floor(3 * Math.random());
// }
// fct which generate a number between 1 & 3
function randomNumber() {
  return colors[Math.floor(3 * Math.random())];
}
// console.log(randomColor());
// fct which update color of background and text
function color() {
  const randomColor = randomNumber();
  backColor.style.backgroundColor = randomColor;
  centerSpan.innerHTML = randomColor;
  console.log('stop clicking');
}

//create an event listener and update when click
btn.addEventListener('click', color);
