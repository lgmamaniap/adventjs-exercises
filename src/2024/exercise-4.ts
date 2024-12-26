// Decorating the christmas tree

function createXmasTree(height: number, ornament: string): string {
  /* Code here */
  let response = "";
  let treeTrunk = "";

  for (let i = height, j = 0; i > 0; i--, j++) {
    if (i === 1) {
      treeTrunk = `${"_".repeat(j)}#${"_".repeat(j)}`;
    }
    const maxSize = i + (i - 1);
    response =
      `${"_".repeat(j)}${ornament.repeat(maxSize)}${"_".repeat(j)}\n` +
      response;
  }
  response += `${treeTrunk}\n${treeTrunk}`;
  return response;
}

const tree_1 = createXmasTree(5, "*");
console.log(tree_1);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree_2 = createXmasTree(3, "+");
console.log(tree_2);
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree_3 = createXmasTree(6, "@");
console.log(tree_3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
