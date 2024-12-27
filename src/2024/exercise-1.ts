// First gift repeated!

function prepareGifts(gifts: number[]): number[] {
  const unique = new Set<number>(gifts);
  return Array.from(unique).sort((a, b) => a - b);
}

export const gifts1 = [3, 1, 2, 3, 4, 2, 5];
export const preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1); // [1, 2, 3, 4, 5]

export const gifts2 = [6, 5, 5, 5, 5];
export const preparedGifts2 = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]

export const gifts3 = [];
export const preparedGifts3 = prepareGifts(gifts3);
console.log(preparedGifts3); // []
// There are no gifts, the list remains empty
