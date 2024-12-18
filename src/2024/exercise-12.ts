type DecorationPrice = { [key: string]: number };
function calculatePrice(ornaments: string): number | undefined {
  const costs: DecorationPrice = {
    "*": 1,
    "o": 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };
  let result: number = costs[ornaments[0]];

  for (let i = 1; i < ornaments.length; i++) {
    if (!costs[ornaments[i]]) return undefined;
    if (costs[ornaments[i]] > costs[ornaments[i - 1]]) {
      result -= 2 * costs[ornaments[i - 1]];
    }
    result += costs[ornaments[i]];
  }

  return result;
}

console.log(calculatePrice("***")); // 3   (1 + 1 + 1)
console.log(calculatePrice("*o")); // 4   (5 - 1)
console.log(calculatePrice("o*")); // 6   (5 + 1)
console.log(calculatePrice("*o*")); // 5  (-1 + 5 + 1)
console.log(calculatePrice("**o*")); // 6  (1 - 1 + 5 + 1)
console.log(calculatePrice("o***")); // 8   (5 + 3)
console.log(calculatePrice("*o@")); // 94  (-5 - 1 + 100)
console.log(calculatePrice("*#")); // 49  (-1 + 50)
console.log(calculatePrice("@@@")); // 300 (100 + 100 + 100)
console.log(calculatePrice("#@")); // 50  (-50 + 100)
console.log(calculatePrice("#@Z")); // undefined (Z is unknown)
