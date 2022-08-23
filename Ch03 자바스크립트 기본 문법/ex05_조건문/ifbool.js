/** 조건식을 거짓(false)으로 취급하는 값
 * 0, NaN, 비어 있는 문자열("")
 */
if (false) {
  console.log("if문 실행");
} else {
  console.log("else문 실행");
}

let value;

if (undefined)  {
  console.log("if문 실행");
} else {
  console.log("else문 실행");
}

value = null;

if (null)  {
  console.log("if문 실행");
} else {
  console.log("else문 실행");
}

if (0)  {
  console.log("if문 실행");
} else {
  console.log("else문 실행");
}

//  Not-A-Number(숫자가 아님)를 나타냅니다.
if (NaN)  {
  console.log("if문 실행");
} else {
  console.log("else문 실행");
}

value = '010-12345678';
if(isNaN(value))
  console.log("숫자가 아닙니다.");
else
  console.log(value);

  if ("")  {
    console.log("if문 실행");
  } else {
    console.log("else문 실행");
  }