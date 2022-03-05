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

let number = +prompt("Enter a number")
let count = 0
while( number!==0 ) {
    number = Math.trunc(number/10)
    count +=1
}
console.log(count)


// 4. Count numbers of digit 9 in a number.

let number = +prompt("Enter a number")
let count = 0
while( number!==0 ) {
    number = Math.trunc(number/10)
    if(number%10 === 9){
        count += 1
    } else {}
}
console.log(count)


// 5. Given a positive number. Print it in reverse order.

let newNum = ""
for (a = +prompt("Enter a number") ; a !== 0 ; a=Math.trunc(a/10) ){
    newNum=newNum+a%10
}
console.log(newNum)
