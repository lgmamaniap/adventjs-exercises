function detectBombs(grid: boolean[][]): number[][] {
  const increaseIndex: Array<Array<number>> = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const response: Array<Array<number>> = [];

  for (let i = 0; i < grid.length; i++) {
    response[i] = [];
    for (let j = 0; j < grid[i].length; j++) {
      response[i].push(0);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!grid[i][j]) continue;

      for (const [x, y] of increaseIndex) {
        const xPos = i + x;
        const yPos = j + y;

        if (
          xPos < 0 ||
          yPos < 0 ||
          xPos >= grid.length ||
          yPos >= grid[i].length
        )
          continue;

        response[xPos][yPos] = (response[xPos][yPos] || 0) + 1;
      }
    }
  }

  return response;
}

console.log(
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(
  detectBombs([
    [true, false],
    [false, false],
  ])
);
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(
  detectBombs([
    [true, true],
    [false, false],
    [true, true],
  ])
);

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
