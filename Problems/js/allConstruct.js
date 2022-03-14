// fn that acc target and arr of strings, return 2d arr, containing all of the ways the target construct by concat of arr elem

//brut force solution

// const allConstruct = (t, wb) => {
//   if (t === "") return [];

//   const result = [];
//   for (let w of wb) {
//     if (t.indexOf(w) === 0) {
//       const suffix = t.slice(w.length);
//       const suffixWays = allConstruct(suffix, wb);
//       const targetWays = suffixWays.map((way) => [w, ...way]);
//       result.push(...targetWays);
//     }
//   }

//   return result;
// };

//dynamic solution
const allConstruct = (t, wb, memo = {}) => {
  if (t in memo) return memo[t];
  if (t === "") return [];

  const result = [];
  for (let w of wb) {
    if (t.indexOf(w) === 0) {
      const suffix = t.slice(w.length);
      const suffixWays = allConstruct(suffix, wb, memo);
      const targetWays = suffixWays.map((way) => [w, ...way]);
      result.push(...targetWays);
    }
  }

  memo[t] = result;
  return result;
};

//evaluate

console.log(
  allConstruct("abcdef", ["abc", "cd", "abc", "def", "abcd", "ef", "c"])
);
