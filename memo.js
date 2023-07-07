

// create a memo function in js

const memoized = () =>{

    const cache = {}
    return (value)=>{
        if(value in cache){
            console.log('fetching from cache')
            return cache[value]
        }else {
            console.log('calculating the value')

            const result = value + 10;
            cache[value] = result
            return result
        }
    }

}


const addValue = memoized()

console.log(addValue(9)) // will return 19 : calculated
console.log(addValue(9)) // will return 19 : cached or memoized
console.log(addValue(6)) // will return 16 : calculated