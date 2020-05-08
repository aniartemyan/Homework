// ex. 1

function uniqueElement(arr) {
  for (let element of arr) {
    for (let i = arr.indexOf(element) + 1; i < arr.length; i++) {
      if (element === arr[i]) {
        return `${element} is not unique`;
      }
    }
  }
  return "all elements are unique";
}
console.log(uniqueElement([1, 2, 3, 4]));


// ex. 2

function getSum(arr) {
  let sum = 0;
  for (let element of arr) {
    if (element < 0) {
      continue;
    } else if (Math.sqrt(element) % 2 === 0) {
      sum += Math.sqrt(element);
    }
  }
  return sum;
}
console.log(getSum([1, 1, 2, 3, 3, 4, 16, -7]));


// ex. 3

function checkString(str) {
  let arr = str.split("");
  if (arr.length <= 1) return "palindrome string";
    if (arr[0] !== arr[arr.length - 1]) {
      return "not palindrome string";
    } else {
      arr.shift();
      arr.pop();
      return checkString(arr.join(""));
    }
}
console.log(checkString("12.321"));


// ex. 4

function asd(arr, word) {
  let wordSort = mergeSort(word);
  
  for (let item of arr) {
    debugger;
    if (wordSort === mergeSort(item)) return wordSort;
  }
  return "There is not correct sublist.";
}

function mergeSort(item) {
  debugger;
  let subArr = item.split("");
  if (subArr.length <= 1) {
    return subArr;
  }
  let mid = Math.floor(subArr.length / 2);
  let left = subArr.slice(0, mid);
  let right = subArr.slice(mid, subArr.length);
  return concater(mergeSort(left), mergeSort(right));
}
function concater(arr1, arr2) {
  let result = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift(arr1[0]));
    } else {
      result.push(arr2.shift(arr2[0]));
    }
  }
  let element = result.concat(arr1, arr2)
  return element;
}
console.log(asd(["enlists", "google", "inlets", "banana"], "listen"));
