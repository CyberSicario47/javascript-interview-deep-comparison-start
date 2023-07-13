// what will be logged here?

// inside a function this keyword is always undefined
// in function keyword you have reference to the global object and in an object it refers to itself and in the classes you have the reference to the instance of the class or inside the function in the method of a class it is undefined

// question 1

// function getItem(){
//    console.log(this)
// }
// description ot will be undefined or window object or node object or anything that is in the context

// getItem()

// const item = {
//     title: 'ball',
//     getItem(){
//         console.log("this",this)
//     },
// }
// description in an object this always points to the object its called in

// item.getItem()


class Item {
    title = "Ball";

    getItem() {
        // solution for the problem older 1
        const this_ = this

        function someFunction() {
            console.log("this", this_)
        }

        someFunction()
    }
}

const item = new Item()

item.getItem()