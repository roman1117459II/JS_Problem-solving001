var numbers = [1, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9, 10, 11, 100, 100, 1000, 2000, 2000, 200]

var res = [];
for(var i = 0; i < numbers.length; i++){

    if(numbers[i] != numbers[i+1] ){
        res.push(numbers[i]);
    }
}
console.log(res);

