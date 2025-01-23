// BracketMatcher code
// function BracketMatcher(str){
//     let stack = [];
//     for(var i = 0; i<str.length;i++){
//         if(str[i]==="("){
//             stack.push(str[i]);
//         }else if(str[i]===")"){
//             if(stack.length===0){
//                 return 0;
//             }
//         }else{
//             stack.pop();
//         }
//     }
//     return stack.length===0? 1 : 0;
// }

// let s = '()';
// console.log(BracketMatcher(s));

// FirstFactorial num code
function FirstFactorial(num){
    if(num === 0 || num === 1){
        return 1;
    }else{
        return num * FirstFactorial(num - 1);
    }
}
console.log("FirstFactorial :", FirstFactorial(4));

// Run string length or compress value of string code
function RunLength(str){
    var runText = '';
    var count = 1;
    for(var i=0;i<str.length;i++){
        if(str[i]===str[i+1]){
            count ++;
        }else{
            runText += count+str[i];
            count=1;
        }
    }
    return runText;
}
console.log("Compress or Run length :", RunLength("aabbcde"));

// String scramble
function stringScramble(str1, str2){
    for(var i =0; str2.length;i++){
        let char = str2[i];
        let index = str1.indexOf(char);
        if(index === -1){
            return false;
        }else{
            str1 = str1.substring(0, index)+str1.substring(index, 1);
        }
        return true;
    }
}
console.log("String Scramble :", stringScramble("world", "wdlro"))

// Swap to strings
function swapToStrings(str){
    str = str.replace(/([a-z]|[A-Z])/g, function(match, p1, p2){
      if(p1){
        return p1.toUpperCase();
      }  else{
        return p2.toLowerCase();
      }
    })
    return console.log(str);
}
swapToStrings("Hello -5L0L6");

// letter changes code and vowel make uppercase
function letterChange(str){
    let charArr = str.split('');

    for(var i=0;i<str.length;i++){
        if(charArr[i].match(/[a-z]/)){
            if(charArr[i]==='z'){
                charArr[i]==="A";
                continue;
            }
            charArr[i] = String.fromCharCode(charArr[i].charCodeAt(0)+1);

            if(charArr[i].match(/[aeiou]/gi)){
                charArr[i] = charArr[i].toUpperCase();
            }
        }
    }
    return charArr.join('');
}
console.log("Letter Change and print aeiou to uppercase", letterChange("hello*3"));

// check numbers two parameters are same print return -1 num2 > num1 print return true
function numChecks(num1, num2){
    if(num2>num1){
        return true;
    }else if(num1 === num2){
        return -1;
    }
    return false;
}
console.log("Number Check num1, num2 :", numChecks(55, 60));

// Fibonacci Checker code
function FibonacciChecker(num){
    var prev = [0];
    for (i = 0; i<num+1; i){
        var check = i + prev[0];
        if(check === num){
            return "yes"
        }
        prev.unshift(i);
        i=check;
    }
    return "no"
}
console.log("Fibonacci Checkker :", FibonacciChecker(52))

// Time Convert code
function timeConvert(num){
    var hours = Math.floor(num / 60)
    var minutes = num % 60;
    return hours + ':' + minutes;
}
console.log("Time Convert", timeConvert(126));

// Alphabet soup code
function AlphabetSoup(str){
    var strArray = str.split('')
    var strArraySort = strArray.sort();
    var strArrayResult = strArraySort.join('');
    return strArrayResult;
}
console.log("Alphabet Soup", AlphabetSoup("world"))

// Password match then return true
function SimplePassword(str){
    if(!/[A-Z]/g.test(str)) return false;
    if(!/[0-9]/g.test(str)) return false;
    if(!/[!=]/g.test(str)) return false;
    if(/password/gi.test(str)) return false;
    if(!(str.length > 7 && str.length < 31)) return false;
    return true;
}
console.log("Simple Password :", SimplePassword("turkey90AAA="));

// Word Split code
function WordSplit(strArr){
    let word = strArr[0];
    let dictionary = strArr[1].split(',');

    let len = word.length;

    for(var i=1; i<=len;i++){
        let w1 = word.substr(0, i);
        let w2 = word.substr(i, len);
        if(dictionary.includes(w1) && dictionary.includes(w2)){
            return `${w1}, ${w2}`;
        }
    }
    return 'Not possible';
}
console.log("Word Split :", WordSplit('baseball', 'a,all,b,ball,bas,base,cat,code,d,e,quit,z,'));
console.log("Word Split :", WordSplit('abcgefd'));

