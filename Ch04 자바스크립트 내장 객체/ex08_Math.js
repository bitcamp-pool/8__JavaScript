/** Math 객체
 * 수학적인 상수와 내장 함수를 가진 객체
 * 숫자 자료형만 지원
 */

/** 1. Math.round()
 * 숫자에 대한 반올림 처리
 */
console.log(Math.round(3.9));
console.log(Math.round(3.6));
console.log(Math.round(3.1));

/** 2. Math.ceil()
 * 숫자에 대한 무조건 올림 처리
 */
console.log(Math.ceil(1.1));
console.log(Math.ceil(1.8));

let total = 73; // 총 게시글 수
let rows = 10;  // 페이지 당 게시글 수
let result = total / 10;
console.log(result);
let pages = Math.ceil(result); // 총 페이지 수
console.log("페이지 수:", pages);
// << 1 2 3 4 5 6 7 8 >>

/** 3. Math.floor()
 * 숫자에 대한 무조건 내림 처리
 */
console.log(Math.floor(9.9));
console.log(Math.floor(0.9));

/** 4. Math.trunc()
 * 소수 부분은 무조건 버리고 정수 부분만 반환
 */
console.log(Math.trunc(8.8));
console.log(Math.floor(8.8));

/** 5. Math.sign()
 * 숫자가 양수인지 음수인지 확인하는 용도로 사용
 * 양수이면 1, 음수이면 -1, 0 이면 0 반환
 */
let num1 = 0;
let num2 = -12.345;
let num3 = 999;
console.log(Math.sign(num1));
console.log(Math.sign(num2));
console.log(Math.sign(num3));

console.log("---------------------------");

/** 6. Math.pow()
 * 제곱 값을 반환
 */
console.log(Math.pow(2,1));
console.log(Math.pow(2,2));
console.log(Math.pow(2,3));
console.log(Math.pow(2,4));
console.log(Math.pow(2,5));

/** 7. Math.sqrt()
 * 제곱근 값을 반환
 */
console.log(Math.sqrt(2));
console.log(Math.sqrt(4));
console.log(Math.sqrt(81));

/** 8. Math.abs()
 * 무조건 양수로 반환
 */
console.log(Math.abs(-9.99));

console.log("-----------------------------");

/** 9. Math.max(), Math.min()
 * 최대 최소 값을 반환
 */
console.log(Math.min(75, 25, 80, 15, 90, 85, 95));

let score = [75, 25, 80, 15, 90, 85, 95];
let maxValue = Math.max(...score);
let minValue = Math.min(...score);
console.log(maxValue, ' / ',  minValue);

/** 10. Math.random()
 * 0 < 숫자형 값 반환 < 1
 * 
 * 특정 범위의 랜덤 정수 값을 생성해야 하는 경우
 */
let cnt = 0;
let rand;
while (rand != 55){
  rand = Math.ceil(Math.random() * 100);
  cnt++;
  console.log("rand:", rand, " cnt:", cnt);
}

// 1 ~ 6 사이의 정수, 55 ~ 80 사이의 정수
function getRandomInteger(min, max){
  // 0.00.. < ... < 0.999..
  return Math.trunc(Math.random() * (max - min + 1) + min);
}

let value = 0;
while(!(value == 55 || value == 80)) {
  value = getRandomInteger(55, 80);
  console.log("랜덤값: ", value);
}

