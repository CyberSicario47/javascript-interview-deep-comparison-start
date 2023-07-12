// Remove all duplicates in the array


const uniqueArr = (arr) => {
    return [...new Set(arr)]
}

const uniqueArr2 = (arr) =>{
    const result = [];
    arr.forEach((item)=>{
        if(!result.includes(item)){
            result.push(item)
        }
    })
    return result
}

const uniqueArr3 = (arr) => {
    return arr.reduce((acc,el)=>{
        return acc.includes(el) ? acc : [...acc, el]
    },[])
}





const arr = [1,2,3,4,5,6,1,2,3,4,5,6,7]

console.log(uniqueArr3(arr))