function treeHeight(
  tree: { value: string; left: any; right: any } | null
): number {
  if (!tree) return 0;
  const leftBranch = treeHeight(tree.left);
  const rightBranch = treeHeight(tree.right);
  return Math.max(leftBranch, rightBranch) + 1;
}

// Tree definition
const tree = {
  value: "🎁",
  left: {
    value: "🎄",
    left: {
      value: "⭐",
      left: null,
      right: null,
    },
    right: {
      value: "🎅",
      left: null,
      right: null,
    },
  },
  right: {
    value: "❄️",
    left: null,
    right: {
      value: "🦌",
      left: null,
      right: null,
    },
  },
};

// Graphical representation of the tree:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Function call
console.log(treeHeight(tree));
// Returns: 3
