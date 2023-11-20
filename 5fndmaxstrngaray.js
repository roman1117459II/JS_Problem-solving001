var friends = ["rahim", "karim", "abdul", "mujib", "maolanavashani"];

var largestname = friends[0];

for(var i = 0; i < friends.length; i++){

    var element = friends[i];;

    if(element.length > largestname.length){
        largestname = element;
    }

}

console.log(largestname);