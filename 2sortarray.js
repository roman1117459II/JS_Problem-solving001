var array1 = [4, 2, 1, 5, 20, 3, 19, 18, 6, 8, 7, 10, 9, 15, 14, 13, 12, 11, 16, 17];

for(var i = 0; i < array1.length; i++){
    for(var j = i+1; j < array1.length; j++){
        if(array1[i] > array1[j]){
            let temp = array1[i];
            array1[i] = array1[j];
            array1[j] = temp;
        }

    }
}

console.log(array1)