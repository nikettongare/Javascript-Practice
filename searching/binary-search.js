// binary search

function binarySearch(array, value) {
  if (!array.length) return -1;

  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (array[mid] !== value && start <= end) {
    if (value > array[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }

  return array[mid] === value ? mid : -1;
}

const res = binarySearch(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  1
);

console.log(res);
