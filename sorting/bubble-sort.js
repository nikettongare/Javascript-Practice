// bubble sort

function bubbleSort(array) {
  let noSwap = false; // when array is sorted dont swap again and break the loop

  for (let j = array.length - 1; j > 0; j--) {
    noSwap = true;

    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        noSwap = false; // after swap to check next element and not break the loop
      }
    }
    if (noSwap) break;
  }

  return array;
}

const res = bubbleSort([2, 6, 23, 7, 38, 23, 92, 22, 7, 9]);

console.log(res);
