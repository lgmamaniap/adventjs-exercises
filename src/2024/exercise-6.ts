// Is the gift inside the box?

function inBox(box: string[]): boolean {
  for (let i = 1; i < box.length - 1; i++) {
    for (let j = 1; j < box[i].length - 1; j++) {
      if (box[i][j] === "*") return true;
    }
  }
  return false;
}

inBox(["###", "#*#", "###"]); // ➞ true

inBox(["####", "#* #", "#  #", "####"]); // ➞ true

inBox(["#####", "#   #", "#  #*", "#####"]); // ➞ false

inBox(["#####", "#   #", "#   #", "#   #", "#####"]); // ➞ false
