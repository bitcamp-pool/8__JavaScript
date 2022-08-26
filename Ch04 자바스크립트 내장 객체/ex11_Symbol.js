/** Symbol 객체
 * 자바스크립트 기본 자료형
 * : String, Number, Boolean, Undefined, Null, Symbol
 */

let person1 = new Object();
person1.name = "우영우";
person1.job = "Lawyer";
person1.getInfo = function(){return `🍙${person1.name}입니다.`};
console.log(person1);

let person2 = {
  name : "권민우",
  job : "Lawyer",
  getInfo: function(){return `🪝${this.name}입니다.`;}
};
console.log(person2);

console.log(person1.getInfo());
console.log(person2.getInfo());

// Object에 있는 모든 키는 for-in 문을 사용해 가져오기 가능
for (const key in person2) {
  console.log(key);
}

console.log("Symbol 사용 =============================================");

/**
 * Symbol은 자바스크립트에서 절대 충돌이 일어나지 않는 
 * 유일한 key 값을 만들어준다 
 * 자바스크립트의 내장된 key 값 등 충돌 방지
 */
let person3 = {
  name : "동그라미",
  job : "swan",
};
// 유일한 key 생성
let getInfo = Symbol("getInfo");
person3[getInfo] = function(){return `🎶🎤${this.name}입니다.`};
console.log(person3);

for (const key in person3){
  console.log(key);
}

console.log(person3[getInfo]());