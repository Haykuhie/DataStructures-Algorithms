function getGivenSum(array, target) {
  let n = array.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) continue;
      if (array[i] + array[j] == target) {
        if (result.includes(array[i])) continue;
        result.push(array[i], array[j]);
      }
    }
  }
  let output = "";
  for (let i = 0; i < result.length; i += 2) {
    output += `Pair found: (${result[i]},${result[i + 1]}) `;
  }
  return output;
}
console.log(getGivenSum([8, 7, 2, 5, 3, 1, 2, 8], 10));
  
