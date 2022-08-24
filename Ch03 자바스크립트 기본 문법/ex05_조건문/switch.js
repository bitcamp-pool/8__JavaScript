/** switch(상수값){
 *    case 상수값1 :
 *         실행할 코드
 *         break;
 *    case 상수값2 :
 *         실행할 코드
 *         break;
 * 
 *           .
 *           .
 *           
 *    default :
 *         실행할 코드  
 * }
 * 
 */

// switch문은 상수값만 올 수 있음. 비교구문 안 됨.
// 상수: 숫자 혹은 특정 문자
let date = new Date();
let day = date.getDay(); // 일요일 0, 월요일 1, .... 토요일 6
let dayName = "";

console.log("day = ", day);

switch(day){
  case 0:
    dayName = "일요일";
    break;
  case 1:
    dayName = "월요일";
    break;
  case 2:
    dayName = "화요일";
    break;
  case 3:
    dayName = "수요일";
    break;
  case 4:
    dayName = "목요일";
    break;
  case 5:
    dayName = "금요일";
    break;
  case 6:
    dayName = "토요일";
    break;                  
  default:
    dayName = "";
}

console.log(`오늘은 ${dayName} 입니다.`);

/** if vs switch
 * if : 조건식에 비교연산 사용 가능, 위에서 아래로 순차적 비교(비효율성)
 * switch : 상수값을 판단, 해당 case절로 바로 이동(if에 비해 효율적)
 * 
 * 결론: 비교연산이 필요없고, 조건을 비교할 대상이 범위가 아닌 특정 상수 값인
 *       경우 switch문을 사용하는 것이 좋다.
 */

