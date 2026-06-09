let a = 5;
let b = 10;
console.log("The sum of a and b is: " + (a + b));
console.log("The product of a and b is: " + (a * b));
console.log("The difference of a and b is: " + (a - b));
console.log("The quotient of a and b is: " + (a / b));  
console.log("The remainder of a and b is: " + (a % b));
console.log("The value of a raised to the power of b is: " + (a ** b));
console.log("The value of a incremented by 1 is: " + (++a));
console.log("The value of b decremented by 1 is: " + (--b));
console.log("The value of a after post-increment is: " + (a++));
console.log("The value of b after post-decrement is: " + (b--));
console .log("The final value of a is: " + a);
console.log("The final value of b is: " + b);   
console.log("does a equals to b? " + (a == b));
console.log("does a not equals to b? " + (a != b));
console.log("is a greater than b? " + (a > b));
console.log("is a less than b? " + (a < b));
console.log("is a greater than or equal to b? " + (a >= b));
console.log("is a less than or equal to b? " + (a <= b));
console.log("is a strictly equal to b? " + (a === b));
console.log("is a strictly not equal to b? " + (a <b && a > b));
console.log("is a greater than b and a less than 20? " + (a > b && a < 20));
console.log("is a less than b or a greater than 20? " + (a < b || a > 20));
console.log("is a not equal to b and a less than 15? " + (a != b && a < 15));       
let temperature = 25;
if (temperature>30){
    console.log("its warm");
    
}else{console.log("its cold");

}


let dayNumber = 1; 
let dayName;




switch (dayNumber) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day number";
}
console.log("The day of the week is: " + dayName);



console.table({student, rollNumber, marks});
console.log(
    "Student Name: " + student + "\n" +
    "Roll Number: " + rollNumber + "\n" +
    "Marks: " + marks
);