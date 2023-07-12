// Write a function which implement range

// range(1, 50)
// 1,2,3,4,5,6,...,50

const range = (start, end) => {
    return [...Array(end).keys()].map(el => el + start)
}
const range2 = (start, end) => {
    const result = [];
    for(let i = start; i <= end; i++){
        result.push(i)
    }
    return result
}


console.log(range(1,21))