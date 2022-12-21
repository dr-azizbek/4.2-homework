//birinchi
function total(someArray) {
  return someArray.reduce((acumulator, currentValue) => acumulator + currentValue, 0)
}
const totalArr = [1, 2, 3]
console.log(`Javobi: ` + total(totalArr))


//ikkinchisi
function stringConcat(arr) {
  const strArr = arr.join('')
  console.log(strArr)
}
stringConcat([1, 2, 3, 4, 5, 6])

//uchinchi
// const voterResults = (age) => {
//   if (age < 25) return ['numYoungPeople', 'youngVotes'];
//   if (age < 35) return ['numMidsPeople', 'numMidVotesPeople'];
//   return ['numOldsPeoples', 'numOldVotesPeople'];
// };
// var voters = [
//   { name: 'Bob', age: 30, voted: true },
//   { name: 'Jake', age: 32, voted: true },
//   { name: 'Kate', age: 25, voted: false },
//   { name: 'Sam', age: 20, voted: false },
//   { name: 'Phil', age: 21, voted: true },
//   { name: 'Ed', age: 55, voted: true },
//   { name: 'Tami', age: 54, voted: true },
//   { name: 'Mary', age: 31, voted: false },
//   { name: 'Becky', age: 43, voted: false },
//   { name: 'Joey', age: 41, voted: true },
//   { name: 'Jeff', age: 30, voted: true },
//   { name: 'Zack', age: 19, voted: false }
// ];

// const result = voters.reduce((a, { age, voted }) => {
//   const [prop, voteProp] = voterResults(age);
//   a[prop] = (a[prop] || 0) + 1;
//   if (voted) {
//     a[voteProp] = (a[voteProp] || 0) + 1;
//   }
//   return a;
// }, {});
// console.log(result);
//uchinchi
function totalVotes(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i].voted == true) {
      sum++
    }
  }
  console.log(sum)
}
let voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
];
totalVotes(voters)

// function totalVotes(arr) {
//   let sum = 0
//   arr.forEach((element) => {
//     if (element.voted == true) {
//       sum++;
//     }
//   });
//   return sum
// }

// let voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false },
// ];
// console.log(`Uchinchini javobi: ` + totalVotes(voters)); // 7



//tortinchi
// function shoppingSpree(arr) {
//   let price = 0
//   for (let i = 0; i < arr.length; ++i) {
//     price += arr[i].pr
//     return price

//   }
// console.log(price)
// }


// shoppingSpree( [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ])

function shoppingSpree(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element.price;
  });
  return sum;
}

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(`To'rtichining javobi: ` + shoppingSpree(wishlist)); // 227005



//beshinchi

function flatten(a, b, d) {
  const result = a.concat(b, d)
  console.log(result)
}

flatten(['1', '2', '3'], [true], [4, 5, 6])

//Oltinchi
// var votersa = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults(arr) {
// let sum=0
// arr.forEach((elm)=>{
//   if(){

//   }
// })
// }

// console.log(voterResults(votersa));

//yettinchi
function sumPositive(a) {
  sum = 0
  for (let i = 0; i < a.length; ++i) {
    if (a[i] > 0) {
      sum += a[i]
    }
  }
  console.log(sum)


}
sumPositive([1, -4, 12, 0, -3, 29, -150])













