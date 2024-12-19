type RespItem = { maxSize: number; content: Array<string> };
type RespType = { [key: string]: RespItem };

function drawTable(data: Array<Record<string, string | number>>): string {
  const accumulator: RespType = {};

  data.forEach((item) => {
    for (const key of Object.keys(item)) {
      const newKey = key.charAt(0).toUpperCase() + key.slice(1);
      if (!accumulator[newKey]) {
        accumulator[newKey] = {
          maxSize: key.length,
          content: [newKey],
        };
      }
      const content: string = item[key].toString();
      if (accumulator[newKey]["maxSize"] < content.length) {
        accumulator[newKey]["maxSize"] = content.length;
      }
      accumulator[newKey]["content"].push(content);
    }
  });

  const responseArray: Array<string> = [];

  for (const values of Object.values(accumulator)) {
    const maxColumn = values.maxSize + 2;
    const separator = `${"".padEnd(maxColumn, "-")}+`;
    let counter: number = 0;

    for (let i = 0; i < values.content.length; i++, counter++) {
      const value = values.content[i];
      if (i === 0) {
        responseArray[counter] =
          (responseArray[counter] ? responseArray[counter] : "+") + separator;
        counter++;
        responseArray[counter] =
          (responseArray[counter] ? responseArray[counter] : "|") +
          ` ${value.padEnd(maxColumn - 2, " ")} |`;
        counter++;
        responseArray[counter] =
          (responseArray[counter] ? responseArray[counter] : "+") + separator;
        continue;
      }

      responseArray[counter] =
        (responseArray[counter] || "|") +
        ` ${values.content[i].padEnd(maxColumn - 2)} |`;

      if (i === values.content.length - 1) {
        responseArray[counter + 1] =
          (responseArray[counter + 1] ? responseArray[counter + 1] : "+") +
          separator;
      }
    }
  }

  return responseArray.join('\n');
}

console.log(drawTable([
  { name: "Alice", city: "London" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "New York" },
]));
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(drawTable([
  { gift: "Doll", quantity: 10 },
  { gift: "Book", quantity: 5 },
  { gift: "Music CD", quantity: 1 },
]));
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
