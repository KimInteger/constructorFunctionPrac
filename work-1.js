// * 이 파일은 기본 함수 연습 파일입니다.
// * 목적은 함수를 조금 더 이해하려고 합니다.
// * 매개변수가 객체인 경우가 아래에 작성될 예정입니다.

function workOne(a, b) {
// * logic : 매개변수 두개를 받은 다음에 
// * logic : return은 객체였음 좋겠다.

// * condition : 매개변수가 모두 문자열이여만 한다.
  if(typeof(a) === 'string' && typeof(b) === 'string'){
    let localVariable = {};
    localVariable[a] = a;
    localVariable[b] = b;

    return localVariable;
  } else {
    console.error('좋은말할 때 문자열로 해라.');
  }
}

// 변수에 할당해서 확인.
let obj = workOne("갓겜","망겜");

console.log(obj);
console.log(typeof(obj));