//Array

//1. 배열 선언하기

const arr1 = new Array();
const arr2 = [1, 2];

//Index를 통해 접근하기

const fruits = ["🍎", "🍌"];

console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 맨처음 찾기
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // 마지막 찾기

// 3. looping
console.clear();

//for 사용하기
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for of 사용하기

for (let fruit of fruits) {
  console.log(fruit);
}

//c. forEach 사용하기
fruits.forEach((fruit) => console.log(fruit));

//4. 배열 더하기 빼기 복사하기

// push 더하기
fruits.push("🍓", "🍇");
console.log(fruits);

// pop 뺴기
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : 앞에 아이템 넣기
fruits.unshift("🍑");
console.log(fruits);

// shift : 맨앞 아이템 빼기

fruits.shift();
fruits.shift();
console.log(fruits);

//note! shift, unshift 는 매우 느리다(전체 데이터의 이동) pop 과 push 보다! 팝과 푸쉬를 쓰자!

//splice : 아이템을 지정한 위치에서 삭제하기

fruits.push("🍓", "🍑", "🍋", "🍇");
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);
fruits.splice(0, 1, "🥝", "🍈");
console.log(fruits);

//두가지 배열 묶기

const fruits2 = ["🥭", "🍐"];

const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 검사, 검색

console.clear();

console.log(fruits);
console.log(fruits.indexOf("🥝")); // 가지고 있다면 번순
console.log(fruits.indexOf("🖋")); //없다면 -1
console.log(fruits.includes("🖋")); //가지고있으면 T 없으면 F

//lastIndexOf
console.clear();
fruits.push("🥝");
console.log(fruits);
console.log(fruits.indexOf("🥝")); // 젤 처음에 있는 순서
console.log(fruits.lastIndexOf("🥝")); // 젤 마지막에 있는 순서
