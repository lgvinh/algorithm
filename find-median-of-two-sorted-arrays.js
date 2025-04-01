/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  let left = 0;
  let right = 0;
  const merged = [];

  while (merged.length < nums1.length + nums2.length) {
    // If one of the arrays is exhausted, add the rest of the other array
    if (left >= nums1.length) {
      merged.push(nums2[right]);
      right += 1;
      continue;
    }

    if (right >= nums2.length) {
      merged.push(nums1[left]);
      left += 1;
      continue;
    }

    // Compare the current elements of both arrays
    // and add the smaller one to the merged array
    if (nums1[left] < nums2[right]) {
      merged.push(nums1[left]);
      left += 1;
    } else {
      merged.push(nums2[right]);
      right += 1;
    }
  }
  // console.log('merged :>> ', merged);

  const mid = Math.floor(merged.length / 2);
  // console.log('mid :>> ', mid);

  if (merged.length % 2 === 0) {
    // console.log('merged[mid] :>> ', merged[mid]);
    // console.log('merged[mid - 1] :>> ', merged[mid - 1]);
    return ((merged[mid] + merged[mid-1]) / 2);
  } else {
    return merged[mid];
  }
};

// console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
// console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
// console.log(findMedianSortedArrays([1, 2], [3, 4, 5, 6, 7, 8, 9, 10, 11])); // 5.0
console.log(findMedianSortedArrays([0,0,0,0,0], [-1,0,0,0,0,0,1])); // 0.0
