// Create a counter function which has increment and getValue functionality


const privateSecret = () => {
    const secret = "foobar"
    return () => secret;
}

const gerPrivateSecret = privateSecret();
console.log(gerPrivateSecret())

const privateCounter = () => {
    let count = 0;

    return{
        increment: (val = 1) =>{
            count +=val;
        },
        getValue: () =>{
            return count;
        },
    }
} 

const counter = privateCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
