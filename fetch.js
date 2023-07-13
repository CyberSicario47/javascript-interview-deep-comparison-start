// Write an example of fetching data using fetch API.


fetch("https://api.github.com/users/gaearon/repos")
    .then(res=>res.json())
    .then(success=>{
    console.log(success)
}).catch(e=>{
    console.log(e)
})

// this is the new methode to get the data and add multiple data asynchronous code and is based on promises