/** Array 객체
 */

/** 1. toString()
 * 베열안의 모든 요소를 쉼표(,)를 이용해 모두 결합해서 하나의 문자열로 반환
 */
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(typeof numbers.toString());

/** 2. join()
 * 배열안의 모든 요소를 파라미터로 지정한 문자를 이용해서 모두 결합하여 
 * 하나의 문자열로 반환
 * 
 * 문자열 덧셈(+) 연산을 이용해 문자열을 합치는 것보다
 * 합쳐야 할 문자열을 배열에 넣고, 나중에 한 번에 join() 함수를 사용해서
 * 합치는 것이 프로그램 성능 면에서 우수하다 
 */
console.log(fruits.join(" _ "));
console.log(numbers.join('.'));

const userList = [
  {
    name:'a001',
    email:'a001@naver.com'
  },
  {
    name:'b123',
    email:'b123@nate.com'
  },
  {
    name:'c337',
    email:'c337@google.com'
  },
];

let userHtml = [];
for (const user of userList){
  userHtml.push('<tr>');
  userHtml.push('<td>' + user.name + '</td>');
  userHtml.push('<td>' + user.email + '</td>');
  userHtml.push('</tr>');
}
console.log(userHtml);
console.log(userHtml.join(''));

// document.getElementById('userTable').innerHTML = userHtml.join('');

/** 3. pop()
 * 배열에서 마지막 데이터를 제거하고, 마지막 데이터를 반환
 * 스택(Stack)자료구조
 * 후입선출(LIFO : Last In First Out) 
 */
console.log(fruits);
let x = fruits.pop();
console.log(x);
console.log(fruits);

/** 4. push() 
 * 배열에 새로운 요소(데이터, 객체)를 추가
 * 
 * 쇼핑몰에서 장바구니 기능 구현할 때 
 * :고객의 제품 추가 버튼 클릭 시 베열에 제품정보 추가
 */
console.log(fruits);
fruits.push("🥝");
console.log(fruits);

/** 5. shift()
 * 배열에서 첫 번째 요소를 제거하고, 첫 번째 요소를 반환
 */
x = fruits.shift();
console.log(x);
console.log(fruits);

/** 6. unshift()
 * 배열의 맨 앞에 요소를 추가하고, 배열의 길이를 반환
 */
x = fruits.unshift('🍓');
console.log(x);
console.log(fruits);

// 서버로부터 받아 온 데이터
let cities = [
  {code:'02', title:'서울'},
  {code:'21', title:'부산'},
  {code:'064', title:'제주'},
];

// 배열의 첫 요소로 추가
cities.unshift({code:'', title:'지역을 선택하세요'});

let options = [];
for (const city of cities){
  options.push("".concat('<option value=', city.code, '>', city.title, '</option>'));
}
console.log(options);

// document.getElementById('selectCity').innerHTML = options.join('');

/** 7. 배열의 요소 변경
 * 변경하고자 하는 배열 인덱스로 접근해서 새로운 요소를 할당
 */
console.log(fruits);
fruits[1] = '🍊';
fruits[2] = '🍒';
console.log(fruits);

/** 8. splice()
 * 새로운 요소를 특정 위치에 추가(목록에 삽입)
 * 추가 시에는 기존 요소를 삭제할 수도 있다
 * 
 * 파라미터
 * (새로운 요소를 추가할 인덱스 번호, 해당 인덱스에서 요소 추가 전 삭제할 요소 수, 
 *  추가할 요소)
 * 
 * 목록(list) 같은 데이터는 배열 형태로 관리, 테이블에서 특정 행을 선택하고 '행 추가'
 * 버튼을 클릭, 현재 선택된 행의 인덱스 번호를 기준으로 새로운 행 추가
 */
fruits.splice(2, 0, "Lemon", "Kiwi");
// fruits.splice(1, 1, "Lemon", "Kiwi");
console.log(fruits);

/** 9. concat()
 * 2개 이상의 배열을 하나의 배열로 결합
 */
let arr1 = ['a', 'b', 'c'];
let arr2 = [ 97, 98, 99 ];
let arr3 = arr1.concat(arr2);
console.log(arr3);

/** 10. slice() vs splice()
 * 2개의 파라미터를 사용하며, 
 * slice(시작 인덱스 <= , < 종료 인덱스);  
 */
console.log(fruits);
let arr4 = fruits.slice(2, 4);
console.log(arr4);

/** 11. sort()
 * 배열에 문자형 데이터가 있는 경우 오름차순으로 정렬
 */
let arr5 = ['samsung', 'lg', 'kia', 'hyundai', 'hanwa'];
arr5.sort();
console.log(arr5);

let arr6 = ['삼성', '엘지', '기아', '현대', '한화'];
arr6.sort();
console.log(arr6);

let arr7 = arr6.reverse();
console.log(arr7);

let points = [40, 100, 60, 30, 80];
console.log(points);
// points.sort();

// 비교함수 적용(양수면 위치 바꿈)
points.sort((a, b) => {return a - b}); // 오름차순
console.log(points);

points.sort((a, b) => {return b - a}); // 내림차순
console.log(points);

/** 12. filter()
 * 배열에서 특정 조건을 만족하는 배열의 요소만을 찾아서 새로운 배열로 반환
 * 데이터를 추출해내는 프로그램 구현
 * 
 * filter(특정 조건을 체크할 callback()함수);
 * : 배열의 각 요소를 시험(callback)해서 통과(true)하면
 *   요소를 그대로 유지하고, false라면 버린다
 */
// 다음 주어진 단어에서 길이가 6자리보다 큰 단어만 추출
let words = ['html', 'eclipse', 'javascript', 'spring', 'constructor'];
let result = words.filter(word => word.length > 6);
console.log(result);

let students = [
  {
    name:'김철수',
    score:78
  },
  {
    name:'이영희',
    score:85
  },
  {
    name:'우영우',
    score:100
  },
  {
    name:'장길산',
    score:65
  },      
];
// 80 점 이상 합격, 합격자 출력
let pass = students.filter(stu => stu.score >= 80);
console.log(pass);
let li = pass.map((stu, idx) => { return stu.name });
console.log(li);

/** 13. map()
 * 배열의 데이터가 Object형일 때, 배열에 담긴 Object를 새로운 형태의
 * Object로 변환해서 배열로 반환
 * 
 * 서버로부터 받아온 데이터를 클라이언트에서 필요에 따라 가공 처리해야 할 때
 */

let guestInfo = students.map((student, idx) => { 
  return {id : idx + 1, name : student.name};  
});
console.log(guestInfo);

/** 14. reduce()
 * 배열에 담긴 데이터를 하나씩 순회하며 callback 함수의 실행 값을
 * 누적하여 결과값을 반환하는 함수
 * 
 * 누적 결과값은 숫자, 문자, 객체 모두 가능
 * 주로 배열에 담긴 데이터의 합계를 구하기
 */
 const array = [1, 2, 3, 4];

 // 0 + 1 + 2 + 3 + 4
 const initialValue = 0;
 const sumWithInitial = array.reduce(
   (previousValue, currentValue) => previousValue + currentValue,
   initialValue
 );
 
 console.log(sumWithInitial);
 // expected output: 10

