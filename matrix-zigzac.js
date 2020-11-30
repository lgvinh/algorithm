// This will print a zic zac-ed square matrix
// with a given parameters n(n must be a integer)
// example:
// n = 5
// => 
//    1  2  9  10 25
//    4  3  8  11 24
//    5  6  7  12 24
//    16 15 14 13 22
//    17 18 19 20 21
console.log(`
-----------------------------------------------------
|   This will print a zic zac-ed square matrix      |
|   with a given parameters n(n must be a integer)  |
|   example:                                        |
|   n = 5                                           |
|   =>                                              |
|     01 02 09 10 25                                |
|     04 03 08 11 24                                |
|     05 06 07 12 24                                |
|     16 15 14 13 22                                |
|     17 18 19 20 21                                |
-----------------------------------------------------
`);
console.time("printZicZacMatrix");
function printZicZacMatrix(n) {
  const a = [];
  for (let i = 0; i < n; i++) {
    a[i] = [];
    a[i][i] = !i ? 1 : a[i-1][i-1] + i*2;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        const greatestNumber = i > j ? i : j;
        const diagonalLineNumber = a[greatestNumber][greatestNumber];
        if (j === greatestNumber && i < greatestNumber) {
          a[i][j] = j % 2
            ? diagonalLineNumber - j + i
            :diagonalLineNumber + j - i;
        } else { // even
          a[i][j] = i % 2
            ? diagonalLineNumber - j + i
            :diagonalLineNumber + j - i;
        }
      }
    }
  }
  return a;
}

const result = printZicZacMatrix(7);
console.timeEnd("printZicZacMatrix");

/**
 * 
 * @param {number[][]} array 
 */
function printPrettier(array) {
  console.log("n is", array[0].length);
  // console.log("Call printZicZacMatrix took " + (t1 - t0) + " milliseconds.")
  console.log("=>");
  for (let i = 0; i < array.length; i++) {
    let string = "";
    for (let j = 0; j < array[i].length; j++) {
      string += ` ${array[i][j] >= 10 ? array[i][j] : "0" + array[i][j]}`;
    }
    console.log(string);
  }
}

printPrettier(result);
