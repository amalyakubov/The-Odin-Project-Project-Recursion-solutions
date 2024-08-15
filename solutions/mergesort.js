function mergeSort(array) {
  if (array.length <= 1) {
    return array;;
  }
  let mid = Math.floor(array.length / 2); // mid = 1
  let left = array.slice(0, mid); // left = [3]
  let right = array.slice(mid); // right = [3, 21]
  let newLeft = mergeSort(left); // mergeSort([3])
  let newRight = mergeSort(right); // mergeSort([3, 21])
  return merge(newLeft, newRight);
}

function merge(left, right) {
  let m = left.length - 1;
  let n = right.length - 1;
  let resultantArray = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i <= m && j <= n) {
    if (left[i] < right[j]) {
      resultantArray[k] = left[i];
      k++;
      i++
    } else {
      resultantArray[k] = right[j];
      k++;
      j++;
    }
  } for (i; i <= m; i++) {
    resultantArray[k] = left[i];
    k++;
  } for (j; j <= n; j++) {
    resultantArray[k] = right[j];
    k++;
  }
  return resultantArray;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 21, 3213, 894545, 13212, 345834, 1238223, 1238213]));
