/*
Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the array with the first index being a string with all the extra characters in a bracket and the second index being the total number of duplicates found.

For example, the input "aaaabbcdefffffffg" should return ["aa[aa]bbcdeff[fffff]g", 2]

Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.


*/

function isolateDuplicates(text) {
    if(typeof text !== "string") throw new Error("Please enter a valid string")
    if(!text.length) return ""
    let cur = "";
    let res = "";
    let count = 0;
    let gthan2 = 0
    for(let i = 0; i < text.length; i++){
        if(cur !== text[i].toLowerCase()){
            if(count > 2) gthan2 += 1;
            res = count > 2 ? `${res}]${text[i]}` : `${res}${text[i]}`;
            count = 1;
        }else{
            res = count === 2 ? `${res}[${text[i]}` : `${res}${text[i]}`;
            count++;
        }
        cur = text[i].toLowerCase();
    }
    if(count > 2){
        gthan2 += 1;
        res = `${res}]`
    }
    return [res, gthan2];
}

module.exports = isolateDuplicates;