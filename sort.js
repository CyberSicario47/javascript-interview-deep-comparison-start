// Sort the array of numbers
// Sort array of objects by author's lastname

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

books.sort((book1,book2)=>{
  const authorLastName1 = book1.author.split(" ")[1]
  const authorLastName2 = book2.author.split(" ")[1]

  return authorLastName1 < authorLastName2 ? -1 : 1
})

console.log(books)