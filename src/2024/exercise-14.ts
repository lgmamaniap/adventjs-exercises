function minMovesToStables(reindeer: number[], stables: number[]): number {
  // Code here
  const sortReindeer = reindeer.sort((a, b) => a - b);
  const sortStables = stables.sort((a, b) => a - b);

  let result: number = 0;

  for (let i = 0; i < reindeer.length; i++) {
    result += Math.abs(sortReindeer[i] - sortStables[i]);
  }

  return result;
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5])); // -> 3
// Explanation:
// Reindeer at positions: 2, 6, 9
// Stables at positions: 3, 8, 5
// 1st reindeer: moves from position 2 to the stable at position 3 (1 move).
// 2nd reindeer: moves from position 6 to the stable at position 5 (1 move)
// 3rd reindeer: moves from position 9 to the stable at position 8 (1 move).
// Total moves: 1 + 1 + 1 = 3 moves

console.log(minMovesToStables([1, 1, 3], [1, 8, 4]));
// Explanation:
// Reindeer at positions: 1, 1, 3
// Stables at positions: 1, 8, 4
// 1st reindeer: does not move (0 moves)
// 2nd reindeer: moves from position 1 to the stable at position 4 (3 moves)
// 3rd reindeer: moves from position 3 to the stable at position 8 (5 moves)
// Total moves: 0 + 3 + 5 = 8 moves
