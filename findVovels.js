const findVovles = (string) => {
  const vovels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of string.toLowerCase()) {
    if (vovels.includes(char)) {
      count++;
    }
  }
  return count;
};

const findVovleImproved = (string) => {
  const vovels = ["a", "e", "i", "o", "u"];
  return string
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      return vovels.includes(char) ? acc + 1 : acc;
    }, 0);
};

console.log(findVovles("aliahmad"));
console.log(findVovleImproved("aliahmad"));
