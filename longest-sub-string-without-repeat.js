/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // If the character is already in the set, remove characters from the left
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    // Add the current character to the set
    set.add(s[right]);

    // Update the maximum length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
