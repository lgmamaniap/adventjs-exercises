type BoxItem = { weight: number; quantity: number };

function distributeWeight(weight: number): string {
  if (weight === 0) return "";

  const boxRepresentations: { [key: string]: Array<string> } = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  const boxUsed: Array<BoxItem> = [
    { weight: 1, quantity: 0 },
    { weight: 2, quantity: 0 },
    { weight: 5, quantity: 0 },
    { weight: 10, quantity: 0 },
  ];

  let index: number = 3;

  while (weight > 0) {
    if (weight - boxUsed[index].weight < 0) {
      index--;
      continue;
    }
    boxUsed[index].quantity++;
    weight -= boxUsed[index].weight;
  }

  let response: Array<string> = [];

  for (const { weight, quantity } of boxUsed) {
    if (quantity === 0) continue;

    for (let i = 0; i < quantity; i++) {
      if (response.length === 0) {
        response = [...boxRepresentations[weight]];
        continue;
      }

      const baseBox = response.pop();

      const newBox = [...boxRepresentations[weight]];

      const headerBox = newBox.shift();

      const mergeHeader = `${baseBox}${headerBox?.slice(
        (baseBox?.length || 0)
      )}`.trim();

      response.push(mergeHeader, ...newBox);
    }
  }

  return response.join("\n");
}

console.log(distributeWeight(1));
// Returns:
//  _
// |_|

console.log(distributeWeight(2));
// Returns:
//  ___
// |___|

console.log(distributeWeight(3));
// Returns:
//  _
// |_|_
// |___|

console.log(distributeWeight(4));
// Returns:
//  ___
// |___|
// |___|

console.log(distributeWeight(5));
// Returns:
//  _____
// |     |
// |_____|

console.log(distributeWeight(6));
// Returns:
//  _
// |_|___
// |     |
// |_____|
