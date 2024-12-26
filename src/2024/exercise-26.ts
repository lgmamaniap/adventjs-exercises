// Calculate the complete percenteage

function getCompleted(timeWorked: string, totalTime: string): string {
  const getSeconds = (hour: string): number => {
    const [h, m, s] = hour.split(":").map((item) => Number(item));
    return h * 3600 + m * 60 + s;
  };
  const secondsWorked = getSeconds(timeWorked);
  const totalSeconds = getSeconds(totalTime);
  const response = Math.round((100 * secondsWorked) / totalSeconds);
  return `${response}%`;
}

console.log(getCompleted("01:00:00", "03:00:00")); // 33%
console.log(getCompleted("02:00:00", "04:00:00")); // 50%
console.log(getCompleted("01:00:00", "01:00:00")); // 100%
console.log(getCompleted("00:10:00", "01:00:00")); // 17%
console.log(getCompleted("01:10:10", "03:30:30")); // 33%
console.log(getCompleted("03:30:30", "05:50:50")); // 60%
