//fn return bool if arr elem can construct target by concat sting values

//brute force solution

// const canConstruct = (t, wb) => {
//   if (t === "") return true;
//   for (let w of wb) {
//     if (t.indexOf(w) === 0) {
//       const suffix = t.slice(w.length);
//       if (canConstruct(suffix, wb)) return true;
//     }
//   }

//   return false;
// };

//dynamic solution
const canConstruct = (t, wb, memo = {}) => {
  if (t in memo) return memo[t];
  if (t === "") return true;

  for (let w of wb) {
    if (t.indexOf(w) === 0) {
      const suffix = t.slice(w.length);
      if (canConstruct(suffix, wb, memo) === true) {
        memo[t] = true;
        return true;
      }
    }
  }

  memo[t] = false;
  return false;
};

//check

console.log(canConstruct("abcdef", ["ab,", "abc", "cd", "def", "abcd"]));
