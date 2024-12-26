// Organizing the inventory

type Inventory = Array<{ name: string; quantity: number; category: string }>;

type ItemType = { [key: string]: number };

type ResultType = { [key: string]: ItemType };

function organizeInventory(inventory: Inventory): object {
  // Code here
  if (inventory.length === 0) return {};

  const result = {} as ResultType;

  for (const item of inventory) {
    if (!result[item.category]) result[item.category] = {};

    if (!result[item.category][item.name]) result[item.category][item.name] = 0;

    result[item.category][item.name] =
      result[item.category][item.name] + item.quantity;
  }

  return result;
}

function organizeInventoryBetter(inventory: Inventory): object {
  const res: Record<string, Record<string, number>> = {};
  for (let { name, quantity, category } of inventory) {
    res[category] = res[category] ?? {};
    res[category][name] = (res[category][name] ?? 0) + quantity;
  }
  return res;
}

const inventory = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];

organizeInventory(inventory);

// Expected result:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventory2 = [
  { name: "book", quantity: 10, category: "education" },
  { name: "book", quantity: 5, category: "education" },
  { name: "paint", quantity: 3, category: "art" },
];

organizeInventory(inventory2);

// Expected result:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
