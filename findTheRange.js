let arr = [1, 4, 11, 2, 37, -4];
let currentValue;
let largest = arr[0];
let smallest = arr[0];

for (let i = 0; i < arr.length; i++) {
  let currentValue = arr[i];
  if (currentValue > largest) {
    largest = currentValue;
  }
  if (currentValue < smallest) {
    smallest = currentValue;
  }
}

console.log(largest, smallest);
