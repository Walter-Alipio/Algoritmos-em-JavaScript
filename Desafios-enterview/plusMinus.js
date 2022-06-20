const arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  let negative = 0;
  let positive = 0;
  let zero = 0;
  const n = arr.length;

  arr.forEach((element) => {
    element < 0 ? negative++ : "";
    element > 0 ? positive++ : "";
    element === 0 ? zero++ : "";
  });

  return [positive, negative, zero].forEach((item) => {
    console.log((item / n).toFixed(6));
  });
}

plusMinus(arr);
