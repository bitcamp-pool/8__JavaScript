/** JSON 객체
 * 
 * JavaScript Object Notation 
 * 데이터를 저장하거나 전송할 때 가장 많이 사용되는
 * 경량의 DATA 교환 형식(데이터 포맷, 데이터 표시 방법)
 * 
 * 특징 :
 * - 서버와 클라이언트 간의 데이터 전송
 * - 자바스크립트의 Object 객체 표기법과 유사
 * - JSON 데이터는 자바스크립트 JSON 객체의 parse() 함수를 이용하여
 *   Object 객체로 변화해서 사용 가능
 * - 프로그래밍 언어에 상관없이 사용할 수 있는 데이터 교환 형식
 * - 대부분의 언어에서 JSON 데이터를 처리할 수 있는 라이브러리를 제공
 * 
 * 구조 :
 * - 키(key)-값(value)
 * - 키는 반드시 쌍따옴표("")를 이용해서 표기
 *   참고) 자바스크립트 Object의 키는 "" 를 사용하지 않아도 된다
 * 
 * 내장함수 :
 * - JSON.stringify()
 *   데이터를 서버로 전송하기 위해서는 데이터 형태를 문자열 형태로 변환해야 한다
 *   이 함수를 사용하면 Object 데이터를 문자열로 변환해 준다
 * 
 * - JSON.parse()
 *   서버로부터 응답받은 데이터는 문자열 형태
 *   이 함수를 사용하면 자바스크립트 Object 객체로 변환해 준다   
 */

 let data = {
  "body":[
      {
          "BSSH_NM":"즐거운나의집돌솥밥",
          "SIGUN_NM":"청주시",
          "DETAIL_ADRES":"상당구 영운천로 153번길 36",
          "TELNO":"2985285",
          "RM":"돌솥정식",
          "APPN_YEAR":"-"
      },
      {
          "BSSH_NM":"사또가든",
          "SIGUN_NM":"청주시",
          "DETAIL_ADRES":"청원구 오창읍 꽃화산길51-1 ",
          "TELNO":"2127072",
          "RM":"청국장",
          "APPN_YEAR":"-"
      },
      {
          "BSSH_NM":"마중가는길",
          "SIGUN_NM":"청주시",
          "DETAIL_ADRES":"상당구 문의면 대청호반로 845-5",
          "TELNO":"2881259",
          "RM":"가마솥밥한정식",
          "APPN_YEAR":"-"
      },
      {
          "BSSH_NM":"오소담",
          "SIGUN_NM":"청주시",
          "DETAIL_ADRES":"상당구 낭성면 지산나박실길 4",
          "TELNO":"2217330",
          "RM":"두부정식",
          "APPN_YEAR":"-"
      },
      {
          "BSSH_NM":"김가네더덕밥",
          "SIGUN_NM":"청주시",
          "DETAIL_ADRES":"서원구 대림로421번길 24",
          "TELNO":"2360789",
          "RM":"더덕한정식",
          "APPN_YEAR":"-"
      },
      {
          "BSSH_NM":"신항도복집",
          "SIGUN_NM":"청주시",
          "DETAIL_ADRES":"청원구 우암로 59",
          "TELNO":"2877192",
          "RM":"복지리",
          "APPN_YEAR":"-"
      },
      {
          "BSSH_NM":"활력추어탕",
          "SIGUN_NM":"청주시",
          "DETAIL_ADRES":"상당구 월평로184번길 106",
          "TELNO":"2941020",
          "RM":"추어탕",
          "APPN_YEAR":"-"
      },
      {
          "BSSH_NM":"황소고집",
          "SIGUN_NM":"청주시",
          "DETAIL_ADRES":"청원구 오창읍 용두길 72",
          "TELNO":"2115550",
          "RM":"청국장돌솥밥정식",
          "APPN_YEAR":"-"
      },
      {
          "BSSH_NM":"돌뫼마을",
          "SIGUN_NM":"청주시",
          "DETAIL_ADRES":"청원구 내수읍 청암로371",
          "TELNO":"2134204",
          "RM":"우리콩손두부전골",
          "APPN_YEAR":"-"
      },
      {
          "BSSH_NM":"이티성영토",
          "SIGUN_NM":"청주시",
          "DETAIL_ADRES":"상당구 미원면 미원초정로978",
          "TELNO":"2960801",
          "RM":"곤드레밥정식",
          "APPN_YEAR":"-"
      }
    ],
    "header":{
      "perPage":10,
      "resultCode":"00",
      "totalRows":852,
      "currentPage":1,
      "resultMsg":"NORMAL SERVICE."
    }
}

console.log(data.header.totalRows);
let li = data.body.map((obj, idx) => {
  return obj.BSSH_NM;
});
console.log("음식점 목록 ==================");
for (nm of li){
  console.log(nm);
}

let response = {
  "employees":[
    {
      "name":"Jhon",
      "age" : 27,
      "salary": 3300 
    },
    {
      "name":"Tom",
      "age" : 35,
      "salary": 5500 
    },
    {
      "name":"Peter",
      "age" : 47,
      "salary": 7800 
    }
  ]
};

// 객체를 문자열로 변환
let stringValue = JSON.stringify(response);
console.log(stringValue);

console.log("====================================================================");

let text = '{"employees":[' + 
  '{"name":"Jhon","age":27,"salary":3300},{"name":"Tom","age":35,"salary":5500},' + 
  '{"name":"Peter","age":47,"salary":7800}]}';

// 문자열 형태의 JSON을 Object 객체로 변화
let obj = JSON.parse(text);
console.log(obj);

