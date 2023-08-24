function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    //store the minvalue and minindex
    let minIndex = i;
    let min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    if (minIndex != i) {
      arr[minIndex] = arr[i];
      arr[i] = min;
    }
  }
  console.log(arr);
}

bubbleSort([2, 6, 9, 1, 5]);
