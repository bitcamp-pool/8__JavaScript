/** Window 객체
 * 윈도우 관련 전역(Global) 객체
 */

// // window.alert()

// alert("이것은 alert 창입니다.");

// if (confirm("정말 삭제하시겠습니까?")){
//   // 삭제 진행
//   console.log("삭제되었습니다.");
// }

// // window.prompt()

// let txt = prompt("아이디를 입력해주세요");
// if (txt == null){
//   // 취소 버튼을 클릭
//   console.log("취소 되었습니다."); 
// } else if (txt == ""){
//   // 어떤 값도 입력하지 않고 확인 버튼을 클릭
//   console.log("아무것도 입력되지않았습니다.");
// } else if (txt != ""){
//   // 값 입력하고 확인 버튼 클릭
//   console.log("처리 중입니다.");
// }

// // window.open()

// window.open("http://naver.com");

/** setTimeout(), clearTimeout()
 * 지정한 시간 간격 후에 정의한 함수를 실행하는 함수
 * 
 * setTimeout(handler, time);
 */
let handler = function(){}

let myExec;
function timeCheck(){
  myExec = setTimeout(
    function(){console.log("시작한지 5초의 시간이 경과되었습니다.")}, 
    5000);
}
function stopCheck(){
  // 함수가 실행되는 것을 중지
  clearTimeout(myExec);
}

timeCheck();
stopCheck();


/** setInterval(), clearInterval() 
 * 지정한 시간 간격마다 정의한 함수를
 * 반복적으로 실행하는 함수
 */

let i = 0;
let fnc = setInterval(
  function(){
    console.log("3초 마다 작업 중... count:", i);
    if (i == 5) {
      clearInterval(fnc);
    }
    i++;
  }, 
  3000
);

fnc;