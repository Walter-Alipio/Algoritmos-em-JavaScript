const candles = [3, 2, 1, 3];

function cakeCandles(candles) {
  candles.sort((a, b) => a - b);
  let count = [];
  for (let i = candles.length; i > 0; i--) {
    count.push(candles[i - 1]);

    if (candles[i - 1] !== candles[i - 2]) {
      break;
    }
  }
  return count.length;
}

console.log(cakeCandles(candles));
