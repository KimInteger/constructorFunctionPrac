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
  set ramenName(ramenName) {
    if(ramenName !== '진라면') {
      console.error('진라면을 먹어!!!!!!!!!!!!!!!!!!!!!!!!!!');
    }
  }
}

let test = new yakiRamen("신라면","물 300ml", "계란, 케찹, 고추장");
console.log(test);