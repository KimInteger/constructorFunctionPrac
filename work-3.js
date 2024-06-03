function workThree(index, name) {
  // * logic : 두개의 매개변수를 받아서 객체를 생성함.
  // * logic : 각각의 변수명은 각각의 키와 값이 됨.

  let local = {
    number : index+1,
    name : name
  };
  return local
};

let test = workThree(0,"JACK MET");
console.log(test);
