/** Rest Parameter
 * 함수의 파라미터로 몇 개의 파라미터가 전달될지 모를 경우 사용
 * 
 * 형식: '...파라미터명'
 * 함수를 호출할 때 파라미터 값을 개수에 상관없이 사용
 * 이 때 전달 받은 파리미터 값은 배열로 저장
 */
console.log(sum(5, 7));
console.log(sum(5, 7, 3, 9));

// function sum(a, b) { return x + y;}; // 메소드 오버로딩(X)
function sum(a, b, c=0, d=0) { return a + b + c + d; };

// 파라미터 개수에 상관없이 ...
function getTotal(...args){
  let total = 0;
  for (let x of args){
    total += x;
  }
  return total;
}

console.log(getTotal(5, 7));
console.log(getTotal(5, 7, 3, 9));
console.log(getTotal(5, 7, 3, 9, 100, 106));
console.log(getTotal(5, 7, 3, 9, 100, 106, 1070));
