// Write a function which checks if string is a palindrome


const isPalindorme = (str) => {
    return str === str.split("").reverse().join("")
}


console.log(isPalindorme("anas"))
