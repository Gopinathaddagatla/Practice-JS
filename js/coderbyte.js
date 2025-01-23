// Single String Sorting 
function stringSort(str){
    let strArr = str.split('').sort().join('');
    return strArr;
}
console.log("String Sorting :", stringSort("coder"));

// Double String params sorting and compare both parameters show result true
function stringChallenge(str1, str2){
    function sortingStr(str){
        return str.split('').sort().join('');
        
    }

    let sortingString1 = sortingStr(str1);
    let sortingString2 = sortingStr(str2);

    return sortingString1 === sortingString2 ? "true" : "false";
}
console.log("String Challenge :", stringChallenge("cdeor", "coder"));
console.log("String Challenge :", stringChallenge("scdeor", "coder"));

// Math Challenge
function MathChallenge(num){
    if(num <= 1){
        return 'false';
    }
    if(num === 2){
        return 'true';
    }
    if(num % 2 === 0){
        return "false";
    }
    for(let i = 3; i<= Math.sqrt(num); i+=2){
        if(num % i=== 0){
            return 'false';
        }
    }
    return true;
}
console.log("Math Challenge", MathChallenge(19))
console.log("Math Challenge", MathChallenge(110))




