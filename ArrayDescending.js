// Perform sorting of an array in descending order

function sortArrayDescending(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });
}

// Example usage:
const numbers = [5, 2, 9, 1, 5, 6];
sortArrayDescending(numbers);
console.log("sorted array : "+ '' + numbers);