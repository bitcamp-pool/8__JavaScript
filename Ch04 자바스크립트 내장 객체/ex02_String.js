/** String 객체
 * 문자열을 다루기 위한 객체
 */


/** 1. length 
 * 회원 가입 시
 * 비밀번호 길이가 8 ~ 16 자 제한 생성규칙 적용
 * 주민번호 앞 6자리 생년월일 유효성 검사
 */
let txt =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let len = txt.length;
console.log(len);


/** 2. indexOf()
 * 문자열 안에 특정 문자열이 존재하는지를 찾고, 있다면
 * 찾고자 하는 문자열이 시작되는 index를 반환하는 함수
 * 문자열을 발견하지 못하면 -1 반환
 * 
 * 전화번호를 입력받는 데 입력받을 전화번호는 하이픈(-)이 없어야 한다.
 * 입력된 전화번호 데이터에 하이픈이 있는지를 확인
 * 
 */
let str = "Please locate where 'locate' occurs!"
let res = str.indexOf('locate');
console.log(res); // 7 

let userPhone = "0101234-5678";

if (userPhone.indexOf('-') != -1){
  console.log("'-'없이 입력해주세요");
} else {
  console.log("정상적으로 입력되었습니다");
}

/** 3. lastIndexOf()
 * 문자열 안에 특정 문자열이 존재하는지를 찾는 것은 indexOf() 함수와 동일
 * 찾고자 하는 문자열이 둘 이상 발견되면 제일 마지막에 발견된 문자열의 index를 반환
 */
console.log(str.lastIndexOf('locate'));

/** 4. slice()
 * 파라미터로 시작 위치와 종료 위치를 주면, 문자열에서 해당 부분은
 * 잘라내서 반환하는 함수
 * 
 * 주민등록번호 성별 표시(구분하기)
 * 1900년대 남자(1) 여자(2)
 * 2000년대 남자(3) 여자(4)
 * 
 * 고유한 제품 코드 추출(모델, 사양 등을 구분)
 */
str = "Apple, Banana, Kiwi";

res = str.slice(7, 13); // 시작 <= 슬라이스 범위 < 종료
console.log(res);

res = str.slice(7); // 종료 인덱스 생략(문자열의 마지막 위치까지 잘라서 반환)
console.log(res);

res = str.slice(-12); // 시작 위치 인덱스를 음수로 주면, 문자열의 끝에서부터 거꾸로 읽음
console.log(res);

// 주민번호 13자리
let serialNumber = '9901013456827';

let years = serialNumber.slice(0, 2);
let gender = serialNumber.slice(6, 7);
console.log("years = ", years);
console.log("gender = ", gender);

birthInfo('9701212456827');

function birthInfo(numbers){
  let year = numbers.slice(0, 2);
  let month = numbers.slice(2, 4);
  let day = numbers.slice(4, 6);
  let gender = numbers.slice(6, 7);

  if (gender === '3' || gender === '4'){
    year = '20' + year;
  } else {
    year = '19' + year;
  }

  let strGender = (gender === '1' || gender ==='3') ? "남자" : "여자";
  console.log(`당신은 ${year}년 ${month}월 ${day}일 태어난 ${strGender}입니다.`)
}

/** 5. substring()
 * slice() 함수와 동일한 기능
 * 단, 파라미터로 음수를 허용하지 않음
 */
console.log(str);
console.log(str.substring(7, 13));

/** 6. replace()
 * 문자열 내의 특정 문자열을 지정한 문자열로 바꾸는 함수
 * 바꾸려는 문자열이 하나 이상 있더라도 처음 발견된 문자열만 교체
 * 대소문자 구분 
 * 
 * 사람 이름, 제품명, 가격... 데이터베이스 데이터로 특정 부분을 바꾸는
 * 프로그램의 경우 해당 변수를 replace() 함수로 값을 할당
 */
str = "Please visit Seoul and Seoul";
let newStr = str.replace("Seoul", "Jeju");
console.log(newStr);

// 정규표현식 사용하기
console.log(str);
let ignoreStr = str.replace(/SEOUL/i, "Jeju");
console.log(ignoreStr);

console.log(str);
let allStr = str.replace(/Seoul/g, "Jeju");
console.log(allStr);

/** 7. toUpperCase(), toLowerCase()
 * 문자열을 모두 대/소문자로 변경
 * 
 * 여권, 항공권, 신용카드 .. 등의 영문 이름은 모두 대문자로 관리
 * 사용자가 영문이름을 입력하면 모두 대문자로 변경하여 서버로 전송
 */
let text1 = "Hello World!";
console.log(text1.toUpperCase());

/** 8. concat()
 * 2개 이상의 문자열을 하나의 문자열로 합치는 함수
 * 
 * 문자열을 계속 추가 또는 조작하여 리턴하는 경우
 */
let t1 = "Hello";
let t2 = "World";
let t3 = t1.concat(" ", t2);
console.log(t3);

let title = "Javascript란?"
let tag = "";
let html = tag.concat("<h1>", title, "</h1>");
console.log(html);

/** 9. trim() 
 * 문자열의 앞, 뒤 공백을 모두 제거하는 함수
 * 
 * 사용자가 입력한 데이터의 앞/뒤 공백이 있는 경우, 
 * 모든 필드에 입력된 데이터는 공백을 제거하여 DB에 저장 
 */
let keyword = "      javascript   "
console.log(keyword);
console.log(keyword.trim());

/** 10. padStart(), padEnd()
 * 문자열 앞/뒤에 지정된 길이만큼 지정된 문자를 추가하는 함수
 * 
 * 표기 체계에 의한 추가 문자 포맷을 사용해야 할 때
 */
let date = new Date();
let month = date.getMonth();
console.log(month);
console.log(typeof month);
let strMon = String(month).padStart(2, 0);
console.log(strMon.concat("월"));

/** 11. charAt()
 * 문자열에서 특정 인덱스에 해당하는 문자 하나를 반환하는 함수
 * 
 * 특정 코드 형식으로부터 추출된 문자를 사용하여 로직을 구현하는 경우
 */
let list = ['A0001', 'M0002', 'P12345', 'A0101', 'M0322', 'P12045'];
let count = 0;
// 제품인 항목이 몇 개?
for (element of list){
  let ch = String(element).charAt(0);
  if (ch === 'P'){
    count++;
  }
}
console.log("목록에 제품의 개수는 총 " + count + "개 입니다.");

let number = '0211254102876'
gender = number.charAt(6) === '3' ? "남성" : "여성";
console.log(gender);

/** 12. charCodeAt()
 * 문자열에서 특정 인덱스에 해당하는 문자 하나의 유니코드 값을 반환
 */
str = "ABCDEFG";
console.log(str.charCodeAt(5));
console.log('🍓🥕🥪'.charCodeAt(1));

/** 13. split()
 * 문자열 내의 특정 구분자를 기준으로 문자열을 분리해서 배열로 반환
 */
let birth = "1997-06-12";
let arr = birth.split('-');
console.log(arr);
console.log(`생년월일 : ${arr[0]}년 ${arr[1]}월 ${arr[2]}일`);















