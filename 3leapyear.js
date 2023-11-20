var leapornot = 2000;

if((leapornot % 400 == 0) || (leapornot % 100 != 0) && (leapornot % 4 == 0)){
    console.log("Leap Year");
}
else{
    console.log("Not a Leap Year");
}
