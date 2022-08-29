/** 화살표 함수
 * 함수를 정의하는 새로운 방법
 * 구문의 간략한 표현
 * 화살표 함수 내의 this는 언제나 상위 스코프의 this를 가리킨다
 */

// 함수 선언식
function hello1(name="이름"){
  return "Hello1 " + name;
}

// 함수 표현식
const hello2 = function (name="아무개") {
  return "Hello2 " + name;
};

console.log(hello1("Jhon"));
console.log(hello2("Tom"));

// 화살표 함수
const hello3 = (name) => { return "Hello3 " + name;};
const hello4 = name => { return "Hello4 " + name;}; // 파라미터가 하나만 있을 경우 () 생략 가능
const hello5 = name => "Hello5 " + name; // 화살표 함수의 유일한 문장이 'return'일때 {}와 'return' 생략 가능

const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
