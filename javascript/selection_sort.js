function selectionSort(arr) {
  // type your code here
  // iterate through an array of numbers to find lowest number and put it at the beginning
  // 1. iterate through list of numbers
  // 2. compare number to the first number in new array
  // 3. if the number of the old array is lower than the new array number, then put it at the front
  // 4. otherwise repeat with the next number in new array

  const sorted = [];
  while (arr.length > 0) {
    // find min of existing array 
    const min = Math.min(...arr);
    // find index of min
    const idx = arr.indexOf(min);

    // move into array 
    sorted.push(min);
    // update current array
    arr.splice(idx, 1);
    // re run until array length ==0
  }

  return sorted;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
