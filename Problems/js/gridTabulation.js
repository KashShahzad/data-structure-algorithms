const gridTraveler = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  //we use subarray through map because it will give us unique value every time .map fn is called
  //now we will initialize the starting value to 1 as a starting point
  table[1][1] = 1;
  //now we iterate through table and add some values
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      //do some bounce checking
      if (j + 1 <= n) table[i][j + 1] += current;
      if (i + 1 <= m) table[i + 1][j] += current;
    }
  }

  return table[m][n];
};

console.log(gridTraveler(3, 2));
