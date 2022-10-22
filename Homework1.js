// 1. Declare 2 variables a and b, such that a > b, and define values for them. Output their
// a. sum
// b. difference (between a and b)
// c. product
// d. quotient (between a and b)
// e. remainder (between a and b)

let a = 14
let b = 5
console.log (a+b)
console.log (a-b)
console.log (a*b)
console.log (a/b)
console.log (a%b)


// 2. Print your name and age in the following format: “My name is ____, I am ____ .”
let name = prompt("What's your name?")
let age = +prompt("How old are you?")
alert ("My name is "+ name +", I am "+age)


// 3. Declare a variable with defined value. Print the last digit of the number.
let number = +prompt("Enter a number")
console.log (number%10)


// 4. Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise.
let number = +prompt("Enter a number")
if (number < 0) {
    alert("yes")
} else {alert("no")}


// 5.  Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
let number1 = +prompt("Enter number 1")
let number2 = +prompt("Enter number 2")
if(number1%number2===0 || number2%number1===0){
    alert(1)
}else {alert (0)}


// 6. Given any number between 1 and 12. Print the name of the respective month.
let number = +prompt("Enter a number between 1 and 12")
switch (number) {
    case 1 : {
        console.log("January")
        break;
    }
    case 2 : {
        console.log("February")
        break;
    }
    case 3 : {
        console.log("March")
        break;
    }
    case 4 : {
        console.log("April")
        break;
    }
    case 5 : {
        console.log("May")
        break;
    }
    case 6 : {
        console.log("June")
        break;
    }
    case 7 : {
        console.log("July")
        break;
    }
    case 8 : {
        console.log("August")
        break;
    }
    case 9 : {
        console.log("September")
        break;
    }
    case 10 : {
        console.log("October")
        break;
    }
    case 11 : {
        console.log("November")
        break;
    }
    case 12 : {
        console.log("December")
        break;
    }
    default : {
        console.log("Invalid number")
    }
}


// 7. Given three numbers. Find the maximum one.
let number1 = +prompt("Enter number 1")
let number2 = +prompt("Enter number 2")
let number3 = +prompt("Enter number 3")
if (number1 >= number2 && number1 >= number3){
    console.log(number1)
} else if (number2 >= number1 && number2 >= number3){
    console.log(number2)
}else {console.log(number3)}
