/** Map 객체
 * Object객체와 매우 유사
 * 키(key)와 값(value)을 맵핑하여 저장
 */

let userMap = new Map();

// set : 쓰기
userMap.set("name", "홍길동");
userMap.set("email", "honggdd@gmail.com");
userMap.set("phone", "010-1234-5678");

console.log("size = ", userMap.size);
console.log(userMap);

// get : 읽기
console.log(userMap.get("name"));
console.log(userMap.get("email"));
console.log(userMap.get("phone"));

// has : Map에 특정 키의 값이 저장되었는지 확인
console.log(userMap.has("phone"));

console.log("******************************************************")

// forEach() : 반복
userMap.forEach(item => {console.log(item)});

console.log("======================================================");
// delete() : 삭제
userMap.delete("email");
console.log(userMap);

// clear() : 모두 삭제
userMap.clear();
console.log(userMap);


/** Object 객체 vs Map 객체
 * 
 * Object : 키로 문자열만 사용
 * Map : 키로 어떤 타입이든 가능
 * 
 * Object : 몇 개의 데이터가 담겨 있는지 수동적으로 계산
 * Map : .size 속성
 * 
 */

