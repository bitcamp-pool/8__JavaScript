/** Default Parameter 
 * 함수를 호출할 때 함수의 파라미터인 message 값을 전달하지 않으면,
 * 함수 내에서 message는 undefined가 된다. 만약 파라미터가 함수네애서
 * 특정 기능을 구현하기 위해 반드시 값이 필요한 상태라면, 
 * 함수를 호출하는 곳에서 파리미터 값을 전달하지 못해서 에러가 발생하게 된다
 * 이런 상황을 피하고자 함수 내에서는 함수를 호출 할 때 파라미터에 값이
 * 전달되었는지를 확인하는 코드를 구현해서 사용해야 한다.
 */

// function say(message){
//   if (message != undefined){
//     console.log(message);
//   } else {
//     console.log("안녕하세요?");
//   }
// }


function say(message = "안녕하세요?"){
  console.log(message);
}

say("Hello everyone~");
say();

console.log("================================");

function multiply(a, b = 1) {
  return a * b;
}

let result = multiply(2, 3);
console.log("result = ", result);

console.log(multiply(5));

