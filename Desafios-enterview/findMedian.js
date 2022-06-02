function findMedian(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);

  const median = parseInt(arr.length / 2);
  console.log(arr[median]);
}
findMedian([5, 3, 2, 4, 1, 0]);
