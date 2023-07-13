// Create throttle function


// debounce is called after the user has done something whereas throttle is called when the user start to do something
// at the beginning or after a certain interval of time

const saveInput = (name) => {
    console.log("save Input", name)
}

const throttle = (func, timeout) => {
    let isWaiting = false;
    return (...args) => {
        if (!isWaiting) {
            func.apply(this, args)
            isWaiting = true
            setTimeout(() => {
                isWaiting = false
            }, timeout)
        }
    }
}

const processChange = throttle(saveInput, 2000)

processChange("foo")

setTimeout(() => {
    processChange("foo")
}, 1000)

setTimeout(() => {
    processChange("foo")
}, 2000)

setTimeout(() => {
    processChange("foo")
}, 2400)
