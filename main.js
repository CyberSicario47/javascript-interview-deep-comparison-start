// Design a shallow and deep comparison function


const shallowCompare = (source, target) => {

    if(typeof source !== typeof target){
        return false
    }


    if(typeof source === 'array'){
        if(source.length !== target.length){
            return false
        }
        
        return source.every((ele, index)=>  el === target[index])
    
    }

    if(typeof source === 'object'){
        if(Object.keys(source).length !==Object.keys(target).length){
            return false
        }
        
        return Object.keys(source).every((index)=>  source[index] ===target[index])
    
    }

    return source === target

}


const deepCompare = (source, target) => {

    if(typeof source !== typeof target){
        return false
    }


    if(typeof source === 'array'){
        if(source.length !== target.length){
            return false
        }
        
        return source.every((ele, index)=>  deepCompare(ele, target[index]))
    
    }

    if(typeof source === 'object'){
        if(Object.keys(source).length !==Object.keys(target).length){
            return false
        }
        
        return Object.keys(source).every((index)=> deepCompare(source[index], target[index]))
    
    }

    return source === target

}

console.log("deepCompare Object",deepCompare({a:{b:2}},{a:{b:2}}))
console.log("deepCompare Array",deepCompare([2,[2,[3,[4]]]],[2,[2,[3,[4]]]]))

console.log("shallowCompare Object",shallowCompare({a:2},{a:2}))
console.log("shallowCompare Array",shallowCompare({a:2},{a:2}))