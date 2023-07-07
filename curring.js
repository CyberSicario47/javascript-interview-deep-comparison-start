



const curry = function (fn){
  return function f1(...args){ 
    if(args.length >= fn.length){
      return fn(...args)
    }else{
      return function f2(...moreArgs){
        const newArgs = args.concat(moreArgs)
        return f1(...newArgs)
      }
    }
  }
}

const curriedSum = curry((a,b,c)=> a + b + c)
// console.log(curriedSum(1,2,3))

const partiallyCurried = curriedSum(1)

console.log(partiallyCurried(3)(9))
// console.log(partiallyCurried())


