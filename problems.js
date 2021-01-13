/**
 * 1. Is Unique
 * Does string have all unique chars; what if no additional data structures allowed?
 */

function one(string) {
    if (string.length < 2) return true;

    const obj = {};

    for (let char of string) {
        if (obj[char]) {
            return false;
        }
        obj[char] = 1;
    }

    return (true);
}

// console.log(one("This axnmm."));

function oneSubOptimal(string) {

    if (string.length < 2) return true;

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (i !== j) {
                if (string[i] === string[j]) return false;
            }
        }
    }

    return (true);
}

// console.log(oneSubOptimal("asdfgjklmnbvcxzqwertyuiopp."));

/**
 * 2. Check Permutation
 * Given two strings, write a method to decide if one is a permutation of the other
 */

function permutation(str1, str2) {
    if (str1 === str2) return true; //O(1) where two strings are the same

    if (str1.length !== str2.length) return false; //O(1) where different lengths

    const obj = {};

    //O(N) runtime

    for (let char of str1) {
        obj[char] = 1;
    }

    for (let char of str2) {
        if (!obj[char]) return false;
    }

    return true;
}

// console.log(permutation("amanaplanacanalpanama", "acanalpanamaamanaplan"));

/**
 * #3 URLify - Write a method to replace all spaces with %20
 */

function URLify(string) {
    //create empty string
    //loop over string
    //push char[0] to string
    //for all remaining chars, if space, push %20 otherwise, push char
    //return new string

    let url = "";

    for (let char of string) {
        char != " " ? url += char : url += "%20";
    }

    return url;
}

console.log(URLify("this is only a test"));