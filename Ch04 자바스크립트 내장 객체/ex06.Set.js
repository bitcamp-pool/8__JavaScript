/** Set 객체
 * 배열(Array)처럼 값들의 집합
 * 타입에 상관없이 값을 추가
 * Set은 중복 값을 허용하지 않는다
 * Set은 유일한 값을 보장
 */

// 로또 생성기

// let rand = Math.random();

// console.log(rand);
// console.log(parseInt(rand * 10));       // 0 ~ 9
// console.log(parseInt(rand * 6));        // 0 ~ 5
// console.log(parseInt(rand * 6 + 1));    // 1 ~ 6

// console.log(parseInt(Math.random() * 45 + 1));

let randSet = new Set();
let count = 0;

while(randSet.size < 6){
  randSet.add(parseInt(Math.random() * 45 + 1));
  count ++;
}

console.log("randSet =", randSet);
console.log("count = ", count);

let lotto = [];

randSet.forEach(value => { lotto.push(value) });
lotto.sort((x, y) => ( x - y ));
console.log("lotto = ", lotto);

console.log(randSet.has(30));






