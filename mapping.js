// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

// solution no 1
// const names = users.filter((user)=> user.isActive).map((user)=> user.name)

//solution no 2
// const names = []
// users.forEach((user)=> names.push(user.name))

// final solution
const names = users
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .filter((user) => user.isActive)
  .map((user) => user.name);

console.log(names);
