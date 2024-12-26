// Execute the magical language

function execute(code: string): number {
  let index: number = 0;
  let response: number = 0;

  const plus = () => {
    response++;
    index++;
  };

  const minus = () => {
    response--;
    index++;
  };

  const nextInstruction = () => {
    index++;
  };

  const loop = () => {
    const initial: number = ++index;
    const active: boolean = response !== 0;
    if (!active)
      for (let i = index; i < code.length; i++)
        if (code[i] === "]") {
          index = i + 1;
          return;
        }

    while (index < code.length) {
      if (code[index] === "]") {
        if (response === 0) {
          index++;
          return;
        }
        index = initial;
      }
      actions[code[index]]();
    }
  };

  const conditional = () => {
    index++;
    const active: boolean = response !== 0;
    if (!active) {
      for (let i = index; i < code.length; i++) {
        if (code[i] === "}") {
          index = i + 1;
          return;
        }
      }
    }

    while (index < code.length) {
      if (code[index] === "}") {
        index++;
        return;
      }
      actions[code[index]]();
    }
  };

  const actions: { [key: string]: (flag?: number) => void } = {
    "+": plus,
    "-": minus,
    ">": nextInstruction,
    "[": loop,
    "{": conditional,
  };

  while (index < code.length) {
    actions[code[index]]();
  }

  return response;
}

console.log(execute("+++")); // 3
console.log(execute("+--")); // -1
console.log(execute(">+++[-]")); // 0
console.log(execute(">>>+{++}")); // 3
console.log(execute("+{[-]+}+")); // 2
console.log(execute("{+}{+}{+}")); // 0
console.log(execute("------[+]++")); // 2
console.log(execute("-[++{-}]+{++++}")); // 5
