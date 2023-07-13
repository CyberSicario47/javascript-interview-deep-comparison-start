// Find the number of occurences of minimum value in the list

const arr = [1, 2, 3,1,2,1,1];

const minimumNumber = Math.min(...arr);

const minNumberFrequencyArray = arr.filter((item)=> item === minimumNumber);

const minNumberFrequency = minNumberFrequencyArray.length;

console.log(minimumNumber,minNumberFrequencyArray,minNumberFrequency);
