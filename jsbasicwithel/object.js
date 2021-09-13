"use strict";
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; 키와 벨류의 집합체이다

const obj1 = {}; //오브젝트 리터럴
const obj2 = new Object(); //오브젝트 컨스트럭터

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const gw = { name: "gw", age: 4 };
print(gw);

gw.hasJob = true; //마음대로 정보를 추가할수있다 하지만 가능하면 쓰지말것 정보가 혼동될 수 있어
console.log(gw.hasJob);

//삭제도 가능!
delete gw.hasJob;

console.log(gw.hasJob);

//.으로도 가져올 수 있고 []를 사용해서 가져올수있다 이 경우에는 반드시 ''스트링 타입으로하기!
console.log(gw.name); // 코딩하는 그 순간 이 값을 가지고 오고 싶을때
console.log(gw["name"]); // 정확하게 어떤 키가 필요한지 모를때 런타임에서(실시간으로) 결정될때 computed properties
gw["hasJob"] = true;
console.log(gw.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(gw, "name");
printValue(gw, "age");

// property  value shorthand 동일한 key 와 value를 반복해야하는 문제 함수를 이용해서 반복을 해결

const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("gw", 25);
console.log(person4);

//constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

//in operator 오브젝트 안에 키가 있는지 확인하는 기능

console.log("name" in gw);
console.log("pucnh" in gw);

console.log(gw.punch);

// for (key in obj)
console.clear();
for (let key in gw) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 클론닝

const user = { name: "gw", age: "25" };
const user2 = user;

console.log(user);

//old way

const user3 = {};

for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const furit3 = { size: "small" };
const mixed = Object.assign({}, fruit1, fruit2, furit3); //뒤에 나오는 녀석이 덮어씌운다
console.log(mixed.color);
console.log(mixed.size);
