function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list, n) {
  if (n <= 0) {
    return 0;
  }
  return (sumRecursion(list, n - 1) + list[n - 1]);
}

function sumTheSimpleWay(list) {
  return _.reduce(list, (memo, num) => memo + num);
}

const list = [1, 2, 3, 4, 5];

console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list, list.length));
console.log(sumTheSimpleWay(list));
