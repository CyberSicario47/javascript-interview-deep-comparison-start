// Write a function which checks if string is an anagram

// Anagrams are words that have the same characters in the same quantity. This means that two strings are anagrams if we can rearrange one to get the other.
// Here are some examples of words that are anagrams.
// “listen” and “silent”
// “rail safety” and “fairy tales”
// “dormitory” and “dirty room”
// “the eyes” and “they see”


const isAnagram = (str1, str2 ) => {
    if(str1.length !== str2.length){
        return false
    }
    
    const lowerString1 = str1.toLowerCase();
    const lowerString2 = str2.toLowerCase();
    
    if(lowerString1 === lowerString2){
        return false
    }

    const sortedString1 = lowerString1.split("").sort().join("");
    const sortedString2 = lowerString2.split("").sort().join("");

    return sortedString1 === sortedString2;
}

console.log(isAnagram("silent", "listen"))