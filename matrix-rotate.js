const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const rotateClockWise = (array) => {
  const returnValue = new Array(array.length);

  for (let i = 0; i < returnValue.length; i++) {
    returnValue[i] = new Array(array.length);
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j >= 0; j--) {
      returnValue[j][array.length - 1 - i] = array[i][j];
    }
  }

  return returnValue;
}

console.log('rotateClockWise :>> ', rotateClockWise(matrix));
