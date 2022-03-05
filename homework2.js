// 1. For a given number calculate the sum of its digits.

let number = +prompt("Enter a number")
let sum = number%10
while( number!==0 ) {
    number = Math.trunc(number/10)
    sum=sum+number%10
}
console.log(sum)

// 2. Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid
// and “no" otherwise. (Triangle is valid if the sum of its two sides are greater than the third side).

let a = +prompt("Side 1") , b = +prompt("Side 2"), c = +prompt("Side 3")
if ( a>b && a>c && a<b+c || b>a && b>c && b<a+c || c>a && c>b && c<a+b){
    console.log("yes")
}else{
    console.log("no")
}


// 3. Given a number print its digits count.

let num = +prompt("Enter a number")
let count1 = 0
while( num!==0 ) {
    num = Math.trunc(num/10)
    count1 +=1
}
console.log(count1)


// 4. Count numbers of digit 9 in a number.

let num1 = +prompt("Enter a number")
let count2 = 0
while( num1!==0 ) {
    num1 = Math.trunc(num1/10)
    if(num1%10 === 9){
        count2 = count2 + 1
    } else {}
}
console.log(count2)


// 5. Given a positive number. Print it in reverse order.

let newNum = ""
for (a = +prompt("Enter a number") ; a !== 0 ; a=Math.trunc(a/10) ){
    newNum=newNum+a%10
}
console.log(newNum)