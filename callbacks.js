// Write an asynchronous function which executes callback after finishing it's asynchronous task


// before async await and promises we have used callbacks for fetching data from the server

const asyncFunction = (callback) => {
    setTimeout(()=>{
        callback('this is called and done!!')
    },2000)
}

asyncFunction((message)=>console.log(message))
// What problem callbacks solve?

// it solves 2 problems 1 it waits for the asynchronous task's result
// ek function ko dosry function ma send kry gy ta k us ko call kr sakain jab hamara kam ho jay
//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// most of all it is a generic function