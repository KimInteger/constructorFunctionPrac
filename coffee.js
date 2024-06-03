class makeCoffee {
  constructor(wondoo, water, sugar, milk) {
    this.wondoo = wondoo;
    this.water = water;
    this.sugar = sugar;
    this.milk = milk;
  }
  // *************** 규격만들기 ****************

  set wondoo(value) {
    if(typeof(value) === "string"){
      // * 관례적으로 이렇게 표기하고 있다.
      // * _의 뜻은 무언가 세팅을 통과한 값을 언더바를 붙이는 관습이 있다.
      // ? 규격에 맞지 않으면, 자체적으로 빼버림.
      this._wondoo = value;
    } else {
      console.error("이 원두가 아니야!!!!!!!! wondoo는 오직.. 문자열이여야만 해...");
    }
  }

  // * get은 객체의 키값에 접근하여 값을 변경해 줄 수 있구나.
  get wondoo() {
    return this._wondoo + '산';
  }


  set water(value) {
    if(typeof(value) === 'number'){
      this._water = value;
    } else {
      console.error('워러는 넘버여야만 해!!!')
    }
  }

  get water() {
    return this._water + 'ml';
  }

  set sugar(value) {
    if(typeof(value) ==='boolean'){
      this._sugar = value;
    } else {
      console.error('불리언 타입이 아니면 안되요~!');
    }
  }

  get sugar() {
    if(this._sugar === true){
      return '단맛';
    } else {
      return '쓴맛';
    }
  }
}

let test = new makeCoffee('대전',300,true,'100ml');
console.log(test);
console.log(test.wondoo);
console.log(test.water);
console.log(test.sugar);