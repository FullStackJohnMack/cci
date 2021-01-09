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


