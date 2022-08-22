/** 기본 자료형
 * 
 * String(문자열)
 * Number(숫자)
 * Boolean(참/거짓)
 * Undefined
 * Null
 * Symbol
 */

// String
let name1 = "John";
let name2 = 'John';
let singleQuote = "He is called 'Johnny1'";
// Escape 문자 사용
singleQuote='He is called \'Johnny2\'';
console.log(singleQuote);
let doubleQuote = 'He is called "Johnny3"';
console.log(doubleQuote);

// Number
let n1 = 35.8;
let n2 = 36;
console.log(n1, n2);

// Boolean : 조건식에 사용
let x = 5;
let y = 5;
let z = 6;
console.log(x == y);
console.log(y == z);
let isOk = true;
console.log(!isOk);

/** undefined
 * : 데이터 타입이자 데이터 값(아무것도 존재하지 않는다는 표현)
 *   변수를 선언하고 값을 할당하지 않으면 자동으로 할당
 */ 
let car;
console.log(car);

/** null
 * : 데이터 타입이자 데이터 값("없음을 의미")
 * null 과 undefinde의 차이?
 * : 브라우저 엔진이 할당하고 리턴(undefined)
 *   개발자가 명시적으로 할당(null)
 * 
 * 자바스크립트 엔진은 가비지컬렉션을 특정 주기마다 실행하고
 * 참조 중이 아닌 메모리 공간을 비우는 작업을 실행, 즉 더 이상
 * 참조가 필요 없는 변수에 대해서 null을 할당하면 메모리 공간을 확보
 */
let component = null;
console.log(component);

/** Symbol : ES6에서 추가
 * Ch04 참조
 */

/** 객체(Object)
 * Ch04 참조
 * : 기본적으로 자바스크립트의 모든 것은 객체(Object) 타입
 */

// Object : 키(key), 값(value) 쌍으로 데이터를 저장
const person = {
  firstName:"Jhon",
  lastName:"Doe",
  age:50,
  eyeColor:"blue"
};

console.log(person.firstName, person.lastName);
person["age"] = 55;
console.log(person.age);

for(let key in person){
  console.log(key, person[key]);
}

// Array : 순서를 갖는 여러 값을 단일 참조로 저장할 수 있는 구조
const cars = ["Benz", "Volvo", "BMW"];
cars[1] = "KIA";
for(let i=0; i<cars.length; i++){
  console.log(cars[i]);
}

// typeof 연산자 : 현재 변수의 데이터 타입
console.log(typeof "문자열");
console.log(typeof 3.14);
console.log(typeof true);
console.log(typeof {x:1, y:2});
console.log(typeof [1, 2, 3]);  // 배열도 자바스크립트에서는 Object
console.log(typeof undefined);
console.log(typeof null);

/** 64비트 부동소수점
 * sign 지수부 가수부
 *  1     11     52  = 64
 */
let x2 = 0.2 + 0.1;   // 0.30000000000000004
console.log(x2);
console.log((0.1).toString(2));

// 소수점이 없는 숫자의 경우 최대 16자리 이상일 때 잘못된 값이 나올 수 있음
let num1 = 999999999999999;
let num2 = 9999999999999999;
console.log(num1);
console.log(num2);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// 오픈소스 Big.js, BigNumber.js, Decimal.js 라이브러리 사용

