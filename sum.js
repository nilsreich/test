// fully random by @BetonMAN
const shuffleArray = arr => arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);

//shuffleArray([1, 2, 3]) //[3, 1, 2]

export default shuffleArray;
