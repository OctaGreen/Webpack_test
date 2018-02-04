import { firstJsVar, firstFunc, varFirstFunc, letFirstFunc } from './first';
import * as secondModule from './second';
import 'bootstrap/dist/css/bootstrap.min.css';

let fileName = 'index.js';
console.log('File: ' + fileName);
console.log('firstJsVar: ' + firstJsVar);
console.log('secondJsVar: ' + secondModule.secondJsVar);

console.log('---------------');
console.log('live reload');

// firstFunc();
// varFirstFunc();
// letFirstFunc();
//
// secondModule.secondFunc();
// secondModule.varSecondFunc();
// secondModule.letSecondFunc();
