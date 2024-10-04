export const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndx]) {
        minIndx = j;
      }
    }
    if (i != minIndx) {
      const temp = arr[minIndx];
      arr[minIndx] = arr[i];
      arr[i] = temp;
    }
  }
};
