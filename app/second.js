export var secondJsVar = 'second variable from second.js file';
let secondJsLet = 'second let variable from second.js file';
export function secondFunc() {
  alert('second.js alert');
}

export var varSecondFunc = function() {
  alert('second.js varSecondFunc');
}

export let letSecondFunc = function() {
  alert('second.js letSecondFunc');
}
