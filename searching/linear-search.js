// linear search

function linearSearch(array, value) {
  if (!array.length) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
}

const res = linearSearch(["hello", "guys", "you", "are", "beautiful"], "you");

console.log(res);
