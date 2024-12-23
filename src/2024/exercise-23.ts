// Find the missing numbers
function findMissingNumbers(nums: number[]): number[] {
  let max: number = 0;
  const numSet = new Set<number>();
  nums.forEach((num) => {
    if (num > max) max = num;
    numSet.add(num);
  });

  const response: Array<number> = [];

  for (let i = 1; i <= max; i++) {
    if (!numSet.has(i)) response.push(i);
  }

  return response;
}

console.log(findMissingNumbers([1, 2, 4, 6]));
// [3, 5]

console.log(findMissingNumbers([4, 8, 7, 2]));
// [1, 3, 5, 6]

console.log(findMissingNumbers([3, 2, 1, 1]));
// []

console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1]));
// [4]
