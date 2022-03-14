//find the shortest combo to gen target value

//brut force solution
// const bestSum = (target, num) => {
//   if (target === 0) return [];
//   if (target < 0) return null;

//   let shortestCombo = null;

//   for (let n of num) {
//     const remainder = target - n;
//     const remainderCombo = bestSum(remainder, num);
//     if (remainderCombo !== null) {
//       const combo = [...remainderCombo.n];
//       if (combo.length < shortestCombo) {
//         shortestCombo = combo;
//       }
//     }
//   }

//   return shortestCombo;
// };

//dynamic solution
const bestSum = (target, num, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombo = null;

  for (let n of num) {
    const remainder = target - n;
    const remainderCombo = bestSum(remainder, num, memo);
    if (remainderCombo !== null) {
      const combo = [...remainderCombo.n];
      if (shortestCombo === null || combo.length < shortestCombo) {
        shortestCombo = combo;
      }
    }
  }

  memo[target] = shortestCombo;
  return shortestCombo;
};
