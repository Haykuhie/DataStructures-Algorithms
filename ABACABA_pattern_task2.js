function fractal(num) {
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arr = str.split("");
  let index = 1;
  let finalString = "A";

  return function iter() {
    if (num <= 0) return "Invalid input!!!";
    if (num === 1) return finalString;
    if (index === num) return finalString;
    finalString += arr[index] + finalString;
    index += 1;
    return iter();
  };
}
const fractal1 = fractal(4);
console.log(fractal1());
