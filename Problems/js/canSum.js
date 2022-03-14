// a fn that takes a target sum and arr of nums as args and evaluate if its possible to gen
// targetsum using elems of arr

//brut force solution
// const canSum = (targetSum, numbers) => {
//   //base cases
//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;

//   //recursive code
//   for (let n of numbers) {
//     const remainder = targetSum - n;
//     if (canSum(remainder, n) === true) {
//       return true;
//     }
//   }

//   return false;
// };

//efficient solution
const canSum = (targetSum, numbers, memo = {}) => {
  //base cases
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  //recursive code
  for (let n of numbers) {
    const remainder = targetSum - n;
    if (canSum(remainder, n, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

//evaluation

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
