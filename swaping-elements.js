function swap(item1, item2) {
  const temp = item1;
  item1 = item2;
  item2 = temp;

  console.log(item1, item2);
  return;
}
swap(1, 2);

function newSwap(item1, item2) {
  [item1, item2] = [item2, item1];

  console.log(item1, item2);
  return;
}

newSwap(1, 2);
