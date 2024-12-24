// Check if the trees are magical mirrors

type TreeType = { value: string; left?: any; right?: any } | undefined;

function isTreesSynchronized(
  tree1: TreeType,
  tree2: TreeType
): [boolean, string] {
  const firstTree: Array<string> = [];
  const secondTree: Array<string> = [];
  const treeExp = (tree: TreeType, direction: string): void => {
    if (!tree) return;
    const left: TreeType = tree.left;
    const right: TreeType = tree.right;

    if (direction === "left") {
      firstTree.push(tree.value);
      treeExp(left, direction);
      treeExp(right, direction);
    } else {
      secondTree.push(tree.value);
      treeExp(right, direction);
      treeExp(left, direction);
    }
  };
  treeExp(tree1, "left");
  treeExp(tree2, "right");

  if (firstTree.length !== secondTree.length) return [false, firstTree[0]];

  for (let i = 0; i < firstTree.length; i++)
    if (firstTree[i] !== secondTree[i]) return [false, firstTree[0]];

  return [true, firstTree[0]];
}

const tree1 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

const tree2 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "⭐" },
};

console.log(isTreesSynchronized(tree1, tree2)); // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "🎁" },
};

console.log(isTreesSynchronized(tree1, tree3)); // [false, '🎄']

const tree4 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

console.log(isTreesSynchronized(tree1, tree4)); // [false, '🎄']

console.log(isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" })); // [false, '🎅']
