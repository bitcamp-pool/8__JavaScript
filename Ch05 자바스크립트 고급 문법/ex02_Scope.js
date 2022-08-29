/** Scope
 * 선언된 변수에 대한 접근성
 * 
 * global scope 
 * : 함수 밖에서 선언된 변수, 함수 안과 밖에서 참조 가능 
 * 
 * local scope
 * : 함수 내에서 선언된 변수, 함수 안에서 참조 밖에서는 참조 불가
 */

function myfunction(){
  let carName = "volvo";
  console.log("함수 안에서 : ", carName);
}

myfunction();
// 함수 내에서 선언된 carName은 함수 밖에서서는 접근 불가
// console.log("함수 밖에서 : ", carName);

let myCar = "avante";

function myfunction2(){
  console.log("함수 안에서 : ", myCar);
}

myfunction2();
console.log("함수 밖에서 : ", myCar);