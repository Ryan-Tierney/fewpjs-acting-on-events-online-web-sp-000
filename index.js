// Your code here
function moveDodgerLeft()
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  if (left < 0) { 
    dodger.style.right = `${left + 1}px`; 
  }
} 