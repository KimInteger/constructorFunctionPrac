function old(a, b) {
  this.first = a;
  this.second = b;
}


class newOld {
  constructor(a,b){
    this.first = a;
    this.second = b;
  }
  add(){
    return this.first + this.second;
  }
}

let testC = new newOld(1,2);
let testCAdd = testC.add();

console.log(testC);
console.log(testCAdd);
