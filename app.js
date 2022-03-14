const numbers = [1, 2, 3, 4, 5];


// function addOne(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i] + 1);
//     }
// }

// addOne(numbers);

// ** Higher Order Function ** //

// const addOne = numbers.map(function(number) {
//     return number + 1;
// });

const addOne = numbers.map((numbers) => numbers + 1);
console.log(addOne);

// const addOne = numbers.map(numbers => numbers + 1).join().replaceAll(",","");
// Output: 23456

numbers.forEach(number => console.log(number+1))

//************************************************************** 

// function isOdd(array, oddArr = []) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       oddArr.push(array[i]);
//     }
//   }
//   return oddArr;
// }

// const oddArray = isOdd(numbers);
// console.log(oddArray);

console.log(numbers.map(number => number)); // [1, 2, 3, 4, 5]

console.log("****************************************");

const isOdd = numbers.filter(number => number % 2 !== 0); // [1, 3, 5]
console.log(isOdd);

console.log("****************************************");

const getTotalValue = numbers.reduce((acc, number) => acc + number, 0);
console.log(getTotalValue);

console.log("****************************************");

const arr1 = [1, 2, 3];
var arr2 = [];
console.log("budur -> "+ arr1.map(a1 => arr2.push(a1))); 

var arr2 = arr1.map(i => i)
console.log(arr2);

console.log("****************************************");

const birthYear = [1990, 1965, 1937, 2005, 1998];
const ages=[];

const result = birthYear.map(year => 2022-year);
console.log(result);

console.log("****************************************");

const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
  ];
  
//   for(let i = 0; i < persons.length; i++) {
//     if(persons[i].age >= 18) {
//       fullAge.push(persons[i]);
//     }
//   }
//   console.log(fullAge);

const fullAge = persons.filter(person => person.age>=18);
console.log(fullAge);

console.log("****************************************");
console.log("****************************************");



var grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

const getBoy = grades.filter(boy => boy.sex ==='M');
const getGirl = grades.filter(girl => girl.sex ==='F')


const averageGradeClassroom = grades.reduce((acc,student) => (acc+student.grade) / grades.length ,0)
console.log(averageGradeClassroom);

const averageGradeOfTheBoys = getBoy.reduce((acc,boy) => (acc+boy.grade) / getBoy.length,0)
console.log(averageGradeOfTheBoys);

const averageGradeOfTheGirls = getGirl.reduce((acc,girl) => (acc+girl.grade)/ getGirl.length,0);
console.log(averageGradeOfTheGirls);

const highNoteAmongTheBoys = Math.max(...getBoy.map(i=>i.grade))// uc nokta ['x','y','z'] bu şekilde içine yazıyor oradan Math kütüphanesi maksimumu seçiyor.
const highNoteAmongTheGirl = Math.max(...getGirl.map(i=>i.grade))

console.log(highNoteAmongTheBoys);
console.log(highNoteAmongTheGirl);
