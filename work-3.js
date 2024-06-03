function workThree(a, b) {
  // * logic : 두개의 매개변수를 받아서 객체를 생성함.
  // * logic : 각각의 변수명은 각각의 키와 값이 됨.

  let local = {};
  local[a] = a;
  local[b] = b;

  return local;
};

let workmen = workThree("흐아","하!");
console.log(workmen);