// 다음 배열을 string으로 변환하시오 join

const fruits = ["apple", "banana", "orange"];

//A
const result = fruits.join(); //구분자 추가 가능

console.log(result);

// 다음 string을 배열로 바꾸시오 split
{
  const fruits = "🍎,🍇,🥝";

  const result = fruits.split(","); //스플릿은 구분자 꼭 넣기

  console.log(result);
}

// 다음 배열을 역순으로 정렬 하시오 reverse(배열 자체를 바꾼다 리턴값도 바꾸고~)

{
  const array = [1, 2, 3, 4, 5];

  const result = array.reverse();

  console.log(array);
}

// 앞에 두 숫자를 지우고 새로운 배열을 만드세요 slice end를 배제한다 0~2까지 지정하면 배제되어서 0 1 까지만 전달됨

{
  const array = [1, 2, 3, 4, 5];

  const result = array.slice(2, 5);

  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// 90점인 학생을 찾으시오 find

{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// 수업에 등록한 학생만 찾기 filter

{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// 점수만 들어있는 새로운 배열 만들기 map (배열안 요소들을 원하는 방법으로 만들고 싶을 때)

{
  const result = students.map((student) => student.score);
  console.log(result);
}

// 50점보다 낮은 학생이 있는지 찾으시오 some 하나라도 조건에 속하면 트루가 나온다 반대로 every는 모든 조건이 충족해야 T

{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = students.every((student) => student.scroe < 50);
  console.log(result2);
}

// 학생들의 평균 점수를 구하기 reduce 값을 누적시켜준다

{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// 학생들의 모든 점수를 스트링으로 변환 먼저 map으로 배열을 만들어주고 필터로 필터링해주고 join을 이용해서 스트링으로 변환
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score > 50)
    .join();
  console.log(result);
}

// 학생들 점수 오름차순 내림차순 표현하기 sort
{
  const result = students
    .map((student) => student.score)
    .sort((score, score2) => score - score2)
    .join();
  console.log(result);
}
