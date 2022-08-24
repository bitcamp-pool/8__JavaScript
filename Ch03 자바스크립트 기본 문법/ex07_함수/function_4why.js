/** 함수를 사용하는 이유
 * 
 *  1. 특정 기능을 하는 코드 블록을 실행 단위로 작성
 *  2. 필요할(반복적인 일 처리) 때마다 호출하여 해당 기능을 사용
 *  3. 같은 코드를 중복해서 여러 번 작성할 필요 X
 *  4. 코드를 수정해야 하는 일이 발생 시 바로 반영
 */

// 부가세 계산 애플리케이션

// 화면 1
let salesPrice1 = 100000;
let vat1 = 0.1;
let tax1 = salesPrice1 * vat1;

// 화면 2
let salesPrice2 = 240000;
let vat2 = 0.1;
let tax2 = salesPrice2 * vat2;

// 화면 3
let salesPrice3 = 970000;
let vat3 = 0.1;
let tax3 = salesPrice3 * vat3;

/** 부가세 10% -> 12% 인상
 * 각 화면에 대한 프로그램 코드를 모두 수정 
 * 부가세 변경 시 VAT 재할당만 하면 끝~
 */ 

const VAT = 0.12;
function calculateTax(salesPrice){
  let tax = salesPrice * VAT;
  return tax;
}

// 부가세가 필요한 화면에서 함수 호출

// 화면 1
let salesPrice11 = 100000;
let tax11 = calculateTax(salesPrice11);

// 화면 2
let salesPrice22 = 240000;
let tax22 = calculateTax(salesPrice22);

// 화면 3
let salesPrice33 = 970000;
let tax33 = calculateTax(salesPrice33);

/** 함수를 사용하는 이유
 * 
 * 반복적인 작업을 쉽게.. 재사용의 용도
 * 비즈니스 로직 변경해야 하는 상황 발생했을 때 효율적이다.
 * 
 * 전체 프로그램을 특정 목적(기능) 단위로 잘게 나누고 
 * 이를 모듈화하여 관리할 수 있도록 해준다.(공통모듈, 라이브러리, 패키지, 프레임워크)
 * 
 */
