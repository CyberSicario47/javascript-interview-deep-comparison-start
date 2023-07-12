// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];


// solution no 1 
const isNameExist = (name, users) => {
  let exists = false;
  for(let i = 0; i< users.length; i++){
    if(users[i].name === name){
      exists = true;
    }
  }
  return exists;
}

// solution easy 
const nameExists = (name, arr) => arr.some((ele)=> ele.name === name)


const isNameExists1 = (name, arr )=> {
  const index = arr.findIndex((el)=>el.name === name)
  return index > 0
}
console.log(isNameExists1("Mofa",users))
