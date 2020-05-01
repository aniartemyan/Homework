function binarySearch (arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let midIndex;
  while (start <= end) {
    midIndex = Math.trunc((start + end) / 2);
    if (num === arr[midIndex]) {
      return midIndex;
    } else if (num < arr[midIndex]) {
      end = --midIndex;
    } else if (num > arr[midIndex]) {
      start = ++midIndex;
    }
  };
  if (num !== arr[midIndex]) {
    return (`${num} is not exist`);
  }
}

console.log( binarySearch([1, 3, 4, 7, 10], 7) );