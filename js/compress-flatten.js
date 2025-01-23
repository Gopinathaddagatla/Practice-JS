// string value compress input is aabbbcccee the output is 2a3b3c2e;
function compressStringVal(str){
    var compress = '';
    var count = 1;
    for(var i = 0; i<str.length; i++){
        if(str[i]===str[i+1]){
            count++;
        }else{
            compress += count + str[i];
            count = 1;
        }
    }
    console.log(compress);
}
compressStringVal('aabbbcccee'); // 2a3b3c2e


const arr = [[1],[2],[3],[[4,5],[6,7],[[8,9],[10,11],[12,13]]]]; 
const flatten = [].concat(...arr.flat(Infinity))
console.log(flatten) // (13) [1, 2, 3, 4, 5, 6, 7,  8, 9, 10, 11, 12, 13]

const evenVal = flatten.filter((element)=>element % 2===0);
console.log(evenVal); // (6) [2, 4, 6, 8, 10, 12]



