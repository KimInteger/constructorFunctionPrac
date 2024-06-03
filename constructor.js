// 분류규격 라면볶음면 {
//   재료들(라면종류, 라면물, 추가재료) {
//     라면종류 : 라면종류;
//     라면물 : 라면물;
//     추가재료 : 추가재료;
//   }
// }

class yakiRamen {
  constructor(ramenName, ramenWater, addFood) {
    this.ramenName = ramenName,
    this.ramenWater =ramenWater,
    this.addFood = addFood
  }
}

let test = new yakiRamen("신라면 건면", "물 550ml", "계란,떡볶이 떡");

console.log(test);