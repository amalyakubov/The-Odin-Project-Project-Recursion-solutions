  function fibs(n) {
  let array = [0, 1];
  if (n <= 2)  {
    let resultArray = [];
    for (let i = 0; i < n; i++) {
      resultArray.push(array[i]);
    }
    return resultArray;
  }
  while(n > 2) {
    array.push(array[array.length - 1] + array[array.length - 2]);
    n--;
  }
  return array;
}

function fibsRec(n) {
  console.log("This was printed recursively");
  if (n <= 2) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push(i);
    }
    return array;
  } else {
    let array = fibsRec(n-1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
  }
}

console.log(fibsRec(8));

