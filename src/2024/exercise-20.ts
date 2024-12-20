type ResponseGift = { missing: Record<string, number>; extra: Record<string, number> };

function fixGiftList(received: string[], expected: string[]): ResponseGift {
  const processor: { [key: string]: number } = {};

  expected.forEach((expGift) => {
    processor[expGift] = processor[expGift] ? processor[expGift] + 1 : 1;
  });

  received.forEach((recGift) => {
    processor[recGift] = processor[recGift] ? processor[recGift] - 1 : -1;
  });

  const response: ResponseGift = {
    missing: {},
    extra: {},
  };

  for (const [key, value] of Object.entries(processor)) {
    if (value > 0) response.missing[key] = value;
    if (value < 0) response.extra[key] = Math.abs(value);
  }

  return response;
}

console.log(
  fixGiftList(
    ["puzzle", "car", "doll", "car"],
    ["car", "puzzle", "doll", "ball"]
  )
);
// Returns:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

console.log(
  fixGiftList(
    ["book", "train", "kite", "train"],
    ["train", "book", "kite", "ball", "kite"]
  )
);
// Returns:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(
  fixGiftList(
    ["bear", "bear", "car"],
    ["bear", "car", "puzzle", "bear", "car", "car"]
  )
);
// Returns:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"]));
// Returns:
// {
//   missing: {},
//   extra: {}
// }
