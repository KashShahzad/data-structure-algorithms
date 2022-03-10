//in 2d grid move from top left to bottom right in either right or down way.

//recursive version
// const gridTravel = (m, n) => {
//   //base cases
//   if ((m === 1) & (n === 1)) return 1;
//   if (m === 0 || n === 0) return 0;

//   return gridTravel(m - 1, n) + gridTravel(m, n - 1);
// };

//dynamic version using memoization
const gridTravel = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  //base cases
  if ((m === 1) & (n === 1)) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTravel(m - 1, n, memo) + gridTravel(m, n - 1, memo);

  return memo[key];
};

//assess
print.log(gridTravel(1, 1));
print.log(gridTravel(2, 2));
print.log(gridTravel(2, 3));
print.log(gridTravel(3, 3));
