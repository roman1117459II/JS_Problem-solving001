function sumnum (num1= 0, num2 = 0) {
    
    var result = num1 + num2;
    return result;
    //we do return cause we want to store the specific
    // data of a variable which calculated above operation
}

var outputofsum= sumnum(1,2);
console.log(outputofsum);

function multiply(num){
    return outputofsum * num;
}

var result = multiply(2);

console.log(result);

function test(){
    return "Te";
}
function test2() {
    return test() + " Amo! ZAIMA";
}
var output2 = test2();

console.log(output2);