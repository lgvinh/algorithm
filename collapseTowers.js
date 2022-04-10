// Is there any duplicate numbers?
// Is there any negative numbers?
// If none of above questions are yes then the below code will run correctly

const randomNumbers = require('./randomNumbers.json');

const towers = [1, 2, 3, 4, 5, 20, 11, 12, 13, 15, 7, 8, 9, 10]; // Expect to return [5, 20]

/**
 * 
 * @param {number[]} towers 
 * @returns {number[]}
 */
const findMinimumCollapseTowers = (towers) => {
  let tallestTower = towers[0];
  let positionOfTallestTower = 0;

  for (let i = 1; i < towers.length; i++) {
    if (towers[i] > tallestTower) {
      tallestTower = towers[i];
      positionOfTallestTower = i;
    }
  }

  const isAbleToCollapseAll = (
    positionOfTallestTower === 0 ||
    positionOfTallestTower === towers.length - 1
  );

  if (isAbleToCollapseAll) {
    return [tallestTower];
  }

  const leftSide = towers.slice(0, positionOfTallestTower);
  const leftSideMinimumCollapseTowers = findMinimumCollapseTowers(leftSide);

  const rightSide = towers.slice(positionOfTallestTower + 1, towers.length - 1);
  const rightSideMinimumCollapseTowers = findMinimumCollapseTowers(rightSide);

  const minimumSide =
    leftSideMinimumCollapseTowers.length <= rightSideMinimumCollapseTowers.length
      ? leftSideMinimumCollapseTowers
      : rightSideMinimumCollapseTowers;

  return [tallestTower, ...minimumSide];
};

console.log(findMinimumCollapseTowers(towers));
console.log(findMinimumCollapseTowers(randomNumbers));
