/** if-else
 * 조건을 만족(true 반환)하는 경우에만 코드블록을 실행
 */

/** 버스 기본 요금 체계
 * 미취학 아동(7세 이하)  0 원
 * 어린이(8세 ~ 13세)   450 원
 * 청소년(14세 ~ 19세)  720 원
 * 일  반(20세 이상)   1200 원
 * 노  인(70세 이상)      0 원
 */

let age = prompt("나이를 입력하세요", '');
let fare = 0;
let cnt = 0;

// if(++cnt && age <= 7){
//   fare = 0;
// }
// if(++cnt && age >= 8 && age <= 13){
//   fare = 450;
// }
// if(++cnt && age >= 14 && age <= 19){
//   fare = 720;
// }
// if(++cnt && age >= 20 && age < 70){
//   fare = 1200;
// }
// if(++cnt && age >= 70){
//   fare = 0;
// }


if(++cnt && age <= 7){
  fare = 0;
} else if(++cnt && age >= 8 && age <= 13){
  fare = 450;
} else if(++cnt && age >= 14 && age <= 19){
  fare = 720;
} else if(++cnt && age >= 20 && age < 70){
  fare = 1200;
} else if(++cnt && age >= 70){
  fare = 0;
}

alert(`요금은 ${fare}원 입니다.`);
console.log("count = ", cnt);