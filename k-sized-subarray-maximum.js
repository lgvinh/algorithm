const maxOfSubarrays = (arr, k) => {
  const result = [];

  for (let i = 0; i < arr.length - k + 1; i++) {
    let maximum = arr[i];
    for (let j = i + 1; j < i + k; j++) {
      const element = arr[j];
      
      if (element > maximum) {
        maximum = element;
      }
    }

    result.push(maximum);
  }

  return result;
}


console.log(maxOfSubarrays([1, 2, 3, 1, 4, 5, 2, 3, 6], 3)); // 3 3 4 5 5 5 6
