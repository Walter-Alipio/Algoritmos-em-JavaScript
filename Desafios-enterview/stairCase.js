const n = 6;

function staircase(n) {
  // Write your code here
  for (let i = 0; i < n; i++) {
    let stair = "";

    for (let j = 1; j < n - i; j++) {
      stair += " ";
    }
    for (let k = 0; k <= i; k++) {
      stair += "#";
    }
    console.log(stair);
  }
}

staircase(n);

function staircase2(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}

staircase2(n);
