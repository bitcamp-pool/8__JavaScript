/** 연산자
 * 산술, 비교, 논리, 문자열, 할당
 */

// 산술 연산자
let y = 1;
let x = y;
x = x + y;
console.log("x =", x);
x = x - y;
console.log("x =", x);
x = 3, y = 2;
console.log(x * y);
console.log(x ** y);
console.log(x / y);
console.log(x % y);
console.log(x += y);

let i = 0;
console.log(i++); // 0
console.log(i);   // 1
console.log(++i); // 2
console.log(i--); // 2
console.log(i);   // 1

// 비교 연산자
let a = 3;
let b = 4;
console.log(a == b);
console.log(a != b);
let n = 3;
let m = '3';
console.log( n == m);     // 자동형변환(문자'3'을 숫자로 변환해서 비교)
console.log( n === m);    // 데이터 타입까지 비교

console.log(a > b);
console.log(a <= b);

// 논리 연산자 : AND(&&), OR(||), NOT(!)
let b1 = true && true;
let b2 = true && false;
let b3 = true || false;
let b4 = (3==3) && (4==4);
console.log("!(3==3) =", !(3==3));

// 문자열 연산자
console.log("바닐라" + " " + "JS");
let myString = "바닐라";
myString += " Javascript";
console.log("myString =", myString);

// 조건(삼항) 연산자 : 조건 ? 값1 : 값2;
let age = 17;
let isAdult = age >= 18 ? true : false;
console.log("isAdunt =", isAdult);
let point = 72;
let grade = point >= 90 ? 'A' : point >= 80 ? 'B' : 'C';
console.log("등급판정결과: ", grade);

