// S : Subject  주어
// O : Object  목적어
// V : verb  동사

// todo : KDT멤버들 객체 만들기.
// work-3.js에서 함수를 호출하여 편집하고, 큰 객체를 만들것.

const makeMember = require('./work-3.js');

const names = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
];

let arrayMembers = [];

// for (let i = 0; i < names.length; i++) {
//   let member = makeMember(i,names[i]);
//   arrayMembers.push(member);
// }

names.forEach((item, index)=>{
  arrayMembers.push(makeMember(index,item));
})

console.log(arrayMembers);