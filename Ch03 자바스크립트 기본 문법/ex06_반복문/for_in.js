/** for-in 문
 * 데이터 타입 중 배열[] 뿐만 아니라 Object에도 사용
 * 할 수 있는 반복문
 * Object는 데이터를 저장할 때 키(key)를 사용하여 저장,
 * 키를 이용해 읽어오기
 */

let list = ['🍔', '🧀', '🥪', '🍲', '🥝', '🍉', '🍓', '🥕'];

// 배열의 index 번호 출력
for (e in list)
  console.log(e);

console.log(list[4]);
console.log("==========================")

// value 를 출력하려면??
for (e in list)
  console.log(list[e]);


let person = {name:'우영우', age:'25', address:'서울'}
for (const key in person){
  console.log(person[key]); // 오브젝트 key에 해당하는 데이터(값) 출력
}
for (const key in person)
  console.log(key);


