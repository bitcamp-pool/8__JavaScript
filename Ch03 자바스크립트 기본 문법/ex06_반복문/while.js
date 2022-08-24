/** while
 * 조건식이 true인 동안 코드 블록을 실행
 * 
 * for vs while
 * 
 * for : 배열(array)을 이용해 반복문을 사용할 때, 반복 횟수가 정해진 경우...
 * while : 특정 조건으로 반복문을 사용할 때
 * 
 */
let i = 1;
while (i <= 10){
  console.log("The number is " + i);
  i++;
}
console.log("========================")
i = 1;
do {
  console.log("The number is " + i);
  i++;
} while(i <= 10);

// 동전(500원) 교환기 프로그램 작성
let inputPrice = 134346; // 사용자가 넣은 지페 금액
let coinUnit = 500;
let coinCount = 0; 

while (inputPrice > 0){
  inputPrice = inputPrice - coinUnit;
  coinCount++;
}

console.log(`동전반환개수:${coinCount}개`);