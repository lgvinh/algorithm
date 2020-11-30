function printZicZacMatrix(n) {
  const a = [];
  for (let i = 0; i < n; i++) {
    a[i] = [];
    a[i][i] = !i ? 1 : a[i-1][i-1] + i*2;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        const diagonalLineNumber = a[j][j];
        if (i % 2) {
          a[i][j] = diagonalLineNumber + 2 - i;
        } else {
          a[i][j] = diagonalLineNumber - j + i;
        }
        // a[i][j] = "*";
      }
    }
  }
  return a;
}

const result = printZicZacMatrix(5);

console.log(result);