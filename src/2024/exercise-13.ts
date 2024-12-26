type Movements = "L" | "R" | "U" | "D";
type MovementItem = { inv: Movements; xMov: number; yMov: number };

function isRobotBack(moves: string): true | [number, number] {
  const movements: Record<string, number> = { U: 0, D: 0, L: 0, R: 0 };
  const opposite: Record<string, string> = { U: "D", D: "U", L: "R", R: "L" };

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    if (move === "!") {
      movements[opposite[moves[++i]]]++;
    } else if (move === "?") {
      movements[moves[++i]] ||= 1;
    } else if (move === "*") {
      movements[moves[++i]] += 2;
    } else {
      movements[move]++;
    }
  }

  const X = movements.R - movements.L;
  const Y = movements.U - movements.D;
  return (!X && !Y) || [X, Y];
}

console.log(isRobotBack("R")); // [1, 0]
console.log(isRobotBack("RL")); // true
console.log(isRobotBack("RLUD")); // true
console.log(isRobotBack("*RU")); // [2, 1]
console.log(isRobotBack("R*U")); // [1, 2]
console.log(isRobotBack("LLL!R")); // [-4, 0]
console.log(isRobotBack("R?R")); // [1, 0]
console.log(isRobotBack("U?D")); // true
console.log(isRobotBack("R!L")); // [2,0]
console.log(isRobotBack("U!D")); // [0,2]
console.log(isRobotBack("R?L")); // true
console.log(isRobotBack("U?U")); // [0,1]
console.log(isRobotBack("*U?U")); // [0,2]
console.log(isRobotBack("U?D?U")); // true

// Step-by-step examples:
console.log(isRobotBack("R!U?U")); // [1,0]
// 'R'  -> moves to the right
// '!U' -> inverts and becomes 'D'
// '?U' -> moves upwards, because the 'U' movement hasn't been done yet

console.log(isRobotBack("UU!U?D")); // [0,1]
// 'U'  -> moves upwards
// 'U'  -> moves upwards
// '!U' -> inverts and becomes 'D'
// '?D' -> does not move, since the 'D' movement has already been done
