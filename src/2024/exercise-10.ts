type MagicAssembler = { [key: string]: number | undefined };
function compile(instructions: string[]): number | undefined {
  const assembler: MagicAssembler = { A: undefined };

  let counter: number = 0;

  while (counter < instructions.length) {
    const [inst, value1, value2] = instructions[counter].split(" ");
    console.log({ inst, value1, value2 });
    switch (inst) {
      case "MOV":
        if (!Number.isNaN(Number(value1))) {
          assembler[value2] = Number(value1);
          break;
        }
        assembler[value2] = assembler[value1];
        break;
      case "INC":
        if (!assembler[value1]) assembler[value1] = 0;
        assembler[value1]++;
        break;
      case "DEC":
        if (!assembler[value1]) assembler[value1] = 0;
        assembler[value1]--;
        break;
      case "JMP":
        if (!assembler[value1]) counter = Number(value2) - 1;
        break;
    }
    console.log(assembler);
    counter++;
  }
  return assembler["A"];
}

const instructions = [
  "MOV -1 C", // copies -1 to register 'C',
  "INC C", // increments the value of register 'C'
  "JMP C 1", // jumps to the instruction at index 1 if 'C' is 0
  "MOV C A", // copies register 'C' to register 'A',
  "INC A", // increments the value of register 'A'
];

console.log(compile(instructions)); // -> 2

const instructions2 = [
  "MOV 5 B", // copies -1 to register 'C',
  "DEC B", // increments the value of register 'C'
  "MOV B A", // jumps to the instruction at index 1 if 'C' is 0
  "INC A", // copies register 'C' to register 'A',
];

console.log(compile(instructions2)); // -> 2

/**
 Step-by-step execution:
 0: MOV -1 C -> The register C receives the value -1
 1: INC C    -> The register C becomes 0
 2: JMP C 1  -> C is 0, jumps to the instruction at index 1
 1: INC C    -> The register C becomes 1
 2: JMP C 1  -> C is 1, the instruction is ignored
 3: MOV C A  -> Copies register C to A. Now A is 1
 4: INC A    -> The register A becomes 2
 */
