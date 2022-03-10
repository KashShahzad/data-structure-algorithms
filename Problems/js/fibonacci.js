//recursive program

// const fib = (n) => {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

//the time complexity will shift from o notation of 2 power n to just 2n, which is simply n

//dynamic program
function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  //to make sure that recursive fn calls accessing same obj add memo in args
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

//presentation
console.log(fib(6));
console.log(fib(8));
console.log(fib(50));
