// The reno race

function drawRace(indices: number[], length: number): string {
  let response: string = "";
  let counter: number = 1;

  const generateString = (index: number) => {
    if (index === 0) return `${"~".repeat(length)} /${counter++}`;

    if (index > 0)
      return `${"~".repeat(index)}r${"~".repeat(
        length - index - 1
      )} /${counter++}`;

    return `${"~".repeat(length + index)}r${"~".repeat(
      Math.abs(index + 1)
    )} /${counter++}`;
  };

  for (let i = 0; i < indices.length; i++) {
    response += `${" ".repeat(indices.length - i - 1)}${generateString(
      indices[i]
    )}${i < indices.length - 1 ? "\n" : ""}`;
  }

  return response;
}

function drawRaceBetter(indices: number[], length: number): string {
  const race: string = indices.reduce((prevValue, value, index) => {
    const reindeerI: number = (value + length) % length;
    let iceTrack: string = `${"~".repeat(reindeerI)}${"r".slice(
      ~reindeerI + 2
    )}`.padEnd(length, "~");
    return (
      prevValue +
      " ".repeat(indices.length - index - 1) +
      iceTrack +
      ` /${index + 1}\n`
    );
  }, "");

  return race.trimEnd();
}

drawRace([0, 5, -3], 10);
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8);
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12);
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/
