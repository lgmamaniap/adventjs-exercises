// The magic train

export type Board = string[];
export type Movement = "U" | "D" | "R" | "L";
export type Result = "none" | "crash" | "eat";
export type MoveStep = { [key: string]: Array<number> };

function moveTrain(board: Board, mov: Movement): Result {
  const moveStep: MoveStep = {
    L: [0, -1],
    R: [0, 1],
    U: [-1, 0],
    D: [1, 0],
  };
  let xPos = -1;
  let yPos = -1;
  for (let i = 0; i < board.length; i++) {
    const resEngine = board[i].indexOf("@");
    if (resEngine !== -1) {
      xPos = i + moveStep[mov][0];
      yPos = resEngine + moveStep[mov][1];
      break;
    }
  }

  if (
    xPos < 0 ||
    yPos < 0 ||
    xPos > board[0].length - 1 ||
    yPos > board.length - 1
  )
    return "crash";

  if (board[xPos][yPos] === "*") return "eat";

  if (board[xPos][yPos] === "·") return "none";

  return "crash";
}

type Space = "·" | "@" | "*" | "o";

export default function moveTrainBetter(board: Board, mov: Movement): Result {
  const moveActions: Record<Movement, number> = {
    D: board[0].length + 1,
    L: -1,
    R: 1,
    U: -board[0].length - 1,
  };

  const resultActions: Record<Exclude<Space, "@"> | "|" | "undefined", Result> =
    {
      "·": "none",
      "*": "eat",
      "|": "crash",
      o: "crash",
      undefined: "crash",
    };

  const boardStringified: string = board.join("|");

  const trainI: number = boardStringified.indexOf("@");
  if (trainI === -1) return "none";

  const nextTrainCell = boardStringified[trainI + moveActions[mov]] as
    | Exclude<Space, "@">
    | "undefined";

  return resultActions[nextTrainCell];
}

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// The train moves to the right and there is empty space on the right