/** 함수 표현식
 * : 변수에 함수를 할당해서 사용하기
 * 
 * 구조 :
 * let sum = function(p1, p2) { return p1 + p2; };
 * let result = sum(1, 2);
 */


/** 함수 vs 함수 표현식 */

let result1 = sum(21, 34);
console.log(result1);

function sum(p1, p2) { return p1 + p2; };

console.log("===========================");

// let minus = function(p1, p2) { return p1 - p2 };
let result2 = minus(789, 111);  // ReferenceError: Cannot access 'minus' before initialization
console.log(result2);
let minus = function(p1, p2) { return p1 - p2 };

