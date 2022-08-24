/** 자바스크립트 내장 객체
 * 객체가 가지고 있는 다향한 함수 기능에 대한 공부(사용되는 사례)
 * 
 * 내장객체(Built-in Object)는 브라우저의 자바스크립트 엔진에 내장된 객체를 말한다.
 * Object 객체는 모든 자바스크립트 객체의 루트 객체이다.
 * Object 객체 외에도 String, Number, Date, Array, Math.. 객체 등 다양한 객체가 존재한다.
 */

// 빈 객체 생성
let person = new Object();

// 멤버 설정
person.name = "Tom";
person.age = 31;
person.address = 'LA';
person.getInfo = function(){
  return person.name + " " + person.age + " " + person.address;
}

console.log(person.getInfo());
