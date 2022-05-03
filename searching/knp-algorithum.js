// KNP search

function knpSearch(string, value) {
  if (!string.length) return -1;

  let count = 0;

  for (let i = 0, j = 0; i < string.length; ) {
    if (string[i + j] === value[j]) {
      if (j === value.length - 1) {
        count++;
        j = 0;
        i++;
      } else {
        j++;
      }
    } else {
      j = 0;
      i++;
    }
  }

  return count;
}

const res = knpSearch("banana ana", "ana");

console.log(res);
