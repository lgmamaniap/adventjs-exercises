// Framing names

function createFrame(names: string[]): string {
  // Code here
  let maxSize: number = 0;

  names.forEach((name) => {
    if (maxSize < name.length) maxSize = name.length;
  });
  let response = `**${"".padEnd(maxSize, "*")}**\n`;
  names.forEach((name) => {
    response += `* ${name}${" ".repeat(maxSize - name.length)} *\n`;
  });
  response += `**${"".padEnd(maxSize, "*")}**`;

  return response;
}

function createFrameBetter(names: string[]): string {
  const maxNameLength =
    [...names].sort((a, b) => b.length - a.length).at(0)?.length ?? 0;
  const longestBorder = "*".repeat(maxNameLength + 4);
  const namesWithSpaces = [];

  for (const name of names) {
    namesWithSpaces.push(
      `* ${name}${" ".repeat(maxNameLength - name.length)} *`
    );
  }

  return `${longestBorder}\n${namesWithSpaces.join("\n")}\n${longestBorder}`;
}

createFrame(["midu", "madeval", "educalvolpz"]);

// Expected result:
//***************
//* midu        *
//* madeval     *
//* educalvolpz *
//***************

createFrame(["midu"]);

// Expected result:
//********
//* midu *
//********

createFrame(["a", "bb", "ccc"]);

// Expected result:
//*******
//* a   *
//* bb  *
//* ccc *
//*******

createFrame(["a", "bb", "ccc", "dddd"]);
