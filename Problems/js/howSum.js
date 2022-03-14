//similar to canSum but instead of boolean value, it will return arr of combination of nums that gen target

// //brut force solution
// const howSum = (target, numbers) => {
//   //base cases
//   if (target === 0) return [];
//   if (target < 0) return null;

//   //branching cases
//   for (let n of numbers) {
//     const remainder = target - n;
//     const remainderResult = howSum(remainder, numbers);
//     if (remainderResult == !null) {
//       return [...remainderResult, n];
//     }
//   }
//   return null;
// };

//dynamic solution
const howSum = (target, numbers, memo = {}) => {
  //base cases
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  //branching cases
  for (let n of numbers) {
    const remainder = target - n;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult == !null) {
      memo[target] = [...remainderResult, n];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
};
