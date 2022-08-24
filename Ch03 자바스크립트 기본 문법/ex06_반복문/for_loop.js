
let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
// 모두 출력
console.log(brands[0]);
console.log(brands[1]);
console.log(brands[2]);
console.log(brands[3]);
console.log(brands[4]);
// 요소가 9999999개 라면...
console.log("===반복문 사용===")
for(let i=0; i<brands.length; i++)
  console.log(brands[i]);

let obj = {
  id:'kor123', 
  name:'김한국'
};
console.log(obj.id, obj.name);
let list = [];
list.push('a'); list.push('b'); list.push(3);
console.log("list =", list);

/**
 * 투입금액이 800원 입니다. 구매가능한 음료 목록을 구하는 프로그램을 작성
 */  
// 음료자판기
let productList = [
  {name:'솔의눈', price:700},
  {name:'커피', price:700},
  {name:'파워레이드', price:1200},
  {name:'오렌지', price:1000},  
  {name:'보리차', price:1200},
  {name:'밀키스', price:800}
];

let coin = 800;
let len = productList.length;
let outputList = []; // 고객이 구매할 수 있는 음료 목록을 저장할 새로운 배열

for (let i = 0; i < len; i++){
  if (coin >= productList[i].price){
    outputList.push(productList[i]);
  }
}

console.log("===== 구매 가능한 음료 목록 =====")
for (let i = 0; i < outputList.length; i++){
  console.log(`${outputList[i].name}(${outputList[i].price}원)`);
}