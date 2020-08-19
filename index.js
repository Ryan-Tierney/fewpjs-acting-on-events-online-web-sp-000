// Your code here
let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF1493";

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

let moveDodgerRight = (e) => {
  const dodger = e.target.querySelector("#dodger");
  const lPos = parseInt(dodger.style.left);
  const maxLpos = parseInt(document.querySelector("#game").offsetWidth)
   - parseInt(dodger.offsetWidth);

  if ( lPos < maxLpos ) {
    let newPos = `${lPos + 10}px`;
    dodger.style.left = newPos;
  }
}

document.addEventListener('keydown', e => {
  if (e.which == KEY_TABLE.LEFT) {
    moveDodgerLeft(e);
  } else if (e.which == KEY_TABLE.RIGHT) {
    moveDodgerRight(e);
  }
})