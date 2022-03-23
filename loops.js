//While Loop syntax:

let x = 10;

while (x < 50) {
  console.log(x);
  x += 1;
}

//For Loop syntax:

// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

let arr = [5, 10, 18, 21];
let currentValue = null;
let largest;
let smallest;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > currentValue) {
    largest = arr[i];
  }

  if (arr[i] < currentValue) {
    smallest = arr[i];
  }
  currentValue = arr[i];
}

console.log(largest, smallest);

//Nested Array Example:

let bobsFollowers = ["Seth", "Elliott", "Tim", "Bob"];
let tinasFollowers = ["Seth", "Elliott", "Jim"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);
