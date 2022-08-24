/** 함수
 * 
 * 역할 :
 * 특정 작업을 여버 번 반복해야 하는 경우 
 * 해당 작업을 재사용 가능한 구조로 만들 때 사용
 * 함수로 구현된 코드는 그 함수를 호출함으로써 반복된 기능을 쉽게 처리
 * 
 * 구조 : 특정 기능을 수행하는 일련의 코드 블록이 하나의 실행 단위
 * 
 * [keyword][함수명][파라미터:입력값]
 * function   sum       (p1, p2) {
 *          [실행문]
 *  let total = p1 + p2;
 *          [반환값]
 *  return sum;
 * }
 * 
 * 함수 호출하여 사용
 * let result = sum(21, 24);
 * 
 */

/** 함수에 대한 주석 처리
 * 덧셈함수
 * @param {number} p1 
 * @param {number} p2 
 * @returns p1 + p2
 */
function sum(p1, p2){
  return p1 + p2;
}
console.log(`2+3=${sum(2, 3)}입니다.`);

let result;
result = calculator(1, 2, '+');
result = calculator(1, 2, '/');
console.log(result);

plus(1, 2); minus(1, 2); multiple(1, 2); divide(1, 2);

console.log("======================문제해결========================")

function plus(n1, n2){return n1 + n2};
function minus(n1, n2){return n1 - n2};
function multiple(n1, n2){return n1 * n2};
function divide(n1, n2){return n1 / n2};

function calculator(x, y, operator){
  let value;
  switch(operator){
    case '+': value = plus(x, y); break;
    case '-': value = minus(x, y); break;
    case '*': value = multiple(x, y); break;
    case '/': value = divide(x, y); break;
    default : value = "operator error";
  }
  return value;
}

console.log(calculator(1, 2, '+'));
console.log(calculator(1, 2, '-'));
console.log(calculator(1, 2, '*'));
console.log(calculator(1, 2, '/'));
console.log(calculator(1, 2, '&'));






