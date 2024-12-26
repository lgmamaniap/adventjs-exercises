// Shoe pairing

type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const maxSizeArray: number = 50;
  const response: number[] = [];

  const iShoes: number[] = new Array<number>(maxSizeArray).fill(0);
  const rShoes: number[] = new Array<number>(maxSizeArray).fill(0);

  shoes.forEach((shoe) => {
    if (shoe.type === "I") iShoes[shoe.size]++;
    else rShoes[shoe.size]++;

    if (iShoes[shoe.size] > 0 && rShoes[shoe.size] > 0) {
      response.push(shoe.size);
      iShoes[shoe.size]--;
      rShoes[shoe.size]--;
    }
  });

  return response;
}

function organizeShoesBetter(shoes: Shoe[]): number[] {
  const matchedPairs = [];
  const counts: { [key: number]: { R: number; I: number } } = {};

  for (const shoe of shoes) {
    // cuenta
    counts[shoe.size] ??= { R: 0, I: 0 };
    counts[shoe.size][shoe.type]++;

    const currentCounts = counts[shoe.size];
    if (currentCounts.R > 0 && currentCounts.I > 0) {
      matchedPairs.push(Number(shoe.size));
      currentCounts.R--;
      currentCounts.I--;
    }
  }

  return matchedPairs;
}

const shoes: Array<Shoe> = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

organizeShoes(shoes);
// [38, 42]

const shoes2: Array<Shoe> = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];
organizeShoes(shoes2);
// [38, 38]

const shoes3: Array<Shoe> = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];

organizeShoes(shoes3);
// []
