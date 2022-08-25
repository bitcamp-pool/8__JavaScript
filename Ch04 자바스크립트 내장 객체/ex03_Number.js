/** Number 객체
 * 숫자를 다룰 때 유용한 property와 함수를 제공하는
 * wraper 객체
 */

/** 1. toString()
 * 숫자형 데이터를 문자형 데이터로 반환해주는 함수
 */
let x = 123;
console.log(typeof x.toString());
console.log((999999).toString());
console.log((999999).toString().padStart(15, 0));

let now = new Date();

let year = now.getFullYear();
let month = now.getMonth().toString().padStart(2, 0);
let day = now.getDate();

let strDate = "".concat(year, "-", month, "-", day);
console.log(strDate);

/** 2. toExponenential()
 * 숫자를 지수형으로 반환해주는 함수
 */
x = 12.34567;
console.log(x.toExponential(2));
console.log(x.toExponential(3));
console.log(x.toExponential(4));
console.log(x.toExponential(5));

/** 3. toFixed()
 * 소수점 몇 번째 자리까지 보여줄지를 결정하는 함수
 * 지정된 소수점 자릿수에 대한 반올림 값을 반환
 * 
 * 달러나 유로 같은 경우 금액을 표기할 때 소수점 이하가 표시
 */
x = 12.345678;
console.log(x.toFixed(0));
console.log(x.toFixed(1));
console.log(x.toFixed(3));

console.log("-------------------");

/** 4. toPrecision()
 * 정수와 소수를 포함해서 몇 번째 자리까지 보여줄지(정밀도)를 결정하는 함수
 * 반올림 값을 반환
 */
console.log(x.toPrecision());
console.log(x.toPrecision(3));
console.log(x.toPrecision(5));

/** 5. parseInt()
 * 전역함수로서 정수로 반환
 * 문자열의 시작이 숫자형이면 숫자형 데이터를 반환
 * 
 * HTML 폼 필드에서 입력받은 값은 모두 문자형
 * 읽어온 값으로 산술 연산이 필요한 경우 반드시 정수형으로 변환해야한다
 */
let s1 = '100';
let s2 = '11';
let result = s1 + s2;
console.log("result = ", result);
let n1 = parseInt(s1);
let n2 = parseInt(s2);
result = n1 + n2;
console.log("result = ", result);

console.log(parseInt("-10"));
console.log(parseInt("-12.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10years"));
console.log(parseInt("NO10"));  // NaN

/** 6. parseFloat()
 * 부동소수점으로 반환
 */
console.log(parseFloat("10.00000"));
console.log(parseFloat("10.00001"));
console.log(parseFloat("10.12345"));

/** 7. Number 객체의 프로퍼티
 */
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);



















