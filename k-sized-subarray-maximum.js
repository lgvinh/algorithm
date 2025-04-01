const maxOfSubarrays = (arr, k) => {
  const result = [];
  const deque = []; // Stores indices of array elements

  for (let i = 0; i < arr.length; i++) {
    // Remove indices that are out of the current window
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    // Remove indices of elements smaller than the current element
    // as they will not be the maximum in this window
    while (deque.length > 0 && arr[deque[deque.length - 1]] < arr[i]) {
      deque.pop();
    }

    // Add the current element's index to the deque
    deque.push(i);

    // Add the maximum element of the current window to the result
    if (i >= k - 1) {
      result.push(arr[deque[0]]);
    }
  }

  return result;
}

console.log(maxOfSubarrays([1, 2, 3, 1, 4, 5, 2, 3, 6], 3)); // 3 3 4 5 5 5 6
