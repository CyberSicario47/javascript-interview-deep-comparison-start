// Create debounce function

const saveInput = (name) => {
    console.log("save Input" ,name)
}

const debounce = (func, timeout) => {
    let timer;
     return (...args)=>{
         clearTimeout(timer)
         // console.log(...args,' this is the inner function')
         timer = setTimeout(()=>{
             func.apply(this,args)
         }, timeout)
     }
}

const processChange = debounce(saveInput, 2000)

processChange("foo")
processChange("foo")
processChange("foo")
processChange("foo")
processChange("foo")

setTimeout(()=>{
    processChange("foo")
    processChange("foo")
    processChange("foo")
    processChange("foo")
    processChange("foo")
},3000)