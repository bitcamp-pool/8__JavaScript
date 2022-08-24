/** for-of
 * Array, String 등 iterable(반복 가능한) 객체에서 사용 가능한 반복문
 * for-loop 보다 간결한 코드
 */
let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for (const brand of brands){
  console.log(brand);
}

let language = "JavaScript";
for (const x of language){
  console.log(x);
}