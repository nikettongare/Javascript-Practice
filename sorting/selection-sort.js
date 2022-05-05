// Selection Sort

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallestElementIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[smallestElementIndex] > array[j]) {
        smallestElementIndex = j;
      }
    }

    if (smallestElementIndex !== i) {
      let temp = array[i];
      array[i] = array[smallestElementIndex];
      array[smallestElementIndex] = temp;
    }
  }

  return array;
}

const res = selectionSort([2, 6, 23, 7, 38, 23, 92, 22, 7, 9]);

console.log(res);
