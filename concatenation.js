// Write a function which can concatenate 2 arrays
// approch 1
const mergeArray = (arr1, arr2) => {
    arr1.push(...arr2)
    return arr1
}
// approch 2
const mergeArray2 = (arr1, arr2) => {
    return arr1.concat(...arr2)
}
// approch 3
const mergeArray3 = (arr1, arr2) => {
    return [...arr1, ...arr2]
}

const arr1 = [1]
const arr2 = [2,3]
const result = mergeArray3(arr1, arr2)

console.log(arr1, arr2,result)