/** Date 객체
 * 자바스크립트에서 날짜와 시간을 다루는 객체
 * 사용자 브라우저의 타임존을 기준으로 날짜와 시간을 출력
 */


/** 1. Date()
 * Date 생성자
 */
// new Date()
let now = new Date();
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

console.log("-------------------------");

/** 2. Get 함수
 */
console.log(now.getFullYear()); // 4자리 년도
console.log(now.getMonth());    // 0~11
console.log(now.getDate());     // 1~31
console.log(now.getHours());    // 0~23
console.log(now.getMinutes());  // 0~59
console.log(now.getSeconds());  // 0~59
console.log(now.getMilliseconds()); // 0~999
console.log(now.getTime());     // 1970년 1월 1일 이후에 해당하는 밀리초 반환
console.log(now.getDay());      // 0~6 사이의 요일(일요일:0, 토요일:6) 반환
console.log(Date.now());        // 현재를 기준으로 getTime()

/** 3. Set 함수
 * Get 함수 참조
 */


