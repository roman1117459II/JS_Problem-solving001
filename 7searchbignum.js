var numbers = [1, 2, 3, 3, 4, 4, 1000, 5, 6, 7, 8, 9, 10];
var val = Number.MIN_VALUE;

for(var i = 0; i < numbers.length; i++){

    if(numbers[i] > val){
        val = numbers[i];
    }
}

console.log(val);