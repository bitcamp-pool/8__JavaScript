/** 변수
 * 
 * 데이터(값, 오브젝트, 함수)를 담는 그릇
 * : 변수를 선언하게 되면 자바스크립트는 변수 값을 저장하기 위한
 *   메모리 공간을 확보하고 값을 저장, 변수를 선언할 때 사용한 
 *   변수명을 통해 값이 저장되어 있는 메모리 공간에 연결하게 된다.
 * 
 * 키워드 
 * : var, let
 * 
 * 선언
 *   var    x   =  "Hello World!";
 * 선언자 변수명     할당된 값
 */

/** 상수
 * 
 * 변화하지 않는 값을 가지고 있는 변수
 * : const로 선언한 변수를 '상수(constant)'라 한다
 * 
 * 키워드
 * : const
 */

/** 정적타입 vs 동적타입 
 * 
 자바나 C 같은 프로그래밍 언어의 경우는 변수를 선언할 때 변수에 담을
 데이터 타입에 따라 변수를 선언하는 방식이 다르지만, 자바스크립트는
 데이터의 타입에 상관없이 동일한 변수 선언자를 사용할 수 있다.
 * byte, char, short, int, double, float, long...
 */

 /** 변수 선언 형식
  * 
  * 변수명(식별자)를 지을 때 규칙
  * : 변수명은 문자(특수문자 제외), 숫자, '_', '$' 기호를 포함
  * : 변수명은 숫자로 시작할 수 없다
  * : 예약어는 사용할 수 없다
  * : 변수명은 대소문자를 구분한다
  */

/** 네이밍 컨벤션
 *
 *  카멜(camelCase)표기법 
 *    : let userName = "";
 *    : 변수병이 두 단어 이상이면 두 번째 이후부터는 
 *      단어의 첫 번째 문자를 대문자로, 나머지는 모두 소문자
 * 스네이크(snake_case) 표기법 
 *    : let user_name = "";
 *    : 변수명을 모두 소문자로 사용, 단어와 단어는 '_'로 연결
 * 파스칼(PascalCase) 표기법
 *    : UserName = "";
 * 헝가리언(Hungarian Notation) 표기법
 *    : strUserName = "";
 */

/**
 * ECMAScript에서 
 * 변수명과 함수명은 카멜표기
 * 클래스명과 생성자명에는 파스칼 표기 권장
 */

// var 선언자
var x = 5;
var y = 6;
var z = x + y;
console.log("z =", z);

/** ES6 이전(var 변수생성)
 * 외부라이브러리 및 타 자바스크립트 코드를 삽입하여 사용하는 경우
 * 코드 중에서 전역변수로 선언된 변수 중 내가 사용하는 변수명과 동일한
 * 변수가 이미 선언되어 사용되고 있다면, 예기치 못한 에러 발생
 */
var x = 7;        
z = x + y;
console.log("z =", z);

// let 선언자
/** ES6 이후(let 변수생성)
 * 동일한 변수명을 갖는 변수를 재선언해서 사용할 수 없다.
 */
let a = 5;
let b = 6;
let c = a + b;
console.log("c =", c);

a = 7;
// let a = 7; SyntaxError: Identifier 'a' has already been declared
console.log("c =", c);


// 실행(ctrl + alt + n) 출력(자물쇠 풀기: 새라인 출력)

// const 선언자
/** ES6에 추가된 선언자 
 * 선언 시점에 값을 할당한 후 같은 변수명으로 재선언 불가
 * 이미 선언된 변수의 값도 재할당(변경) 불가
 * 즉, 선언 시점에 할당한 값을 절대로 변경하지 않는 용도로 사용
 * 
 */
// const x;
const PI = 3.141592;
// PI = 3.14;  TypeError: Assignment to constant variable.
const r = 10;

console.log("pi =", PI); 
console.log("원의 넓이:", r**2*PI);

// 사용예
const DATE_FORMAT = 'yyyy.MM.dd'; // 날짜 포맷은 년.월.일
const COLOR_LOGO = '#ff0000';     // 특정 색상값 설정
const DEFAULT_VALUE = 0;          // 특정 정수값


