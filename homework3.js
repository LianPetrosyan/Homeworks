 // 1. Given an array․ Compute the length of the array. (without using .length)
 let arr = [0, 1, 2, 3, 4, 5]
 let count = 0
 for (i=0 ; arr[i] !== undefined ; i++) {
     count += 1
 }
 console.log(count)

 // 2. Given an array of numbers. Print the sum of the elements in array.
 let arr = [1, 12, 4]
 let sum = 0
 for (i = 0 ; i < arr.length ; i++){
     sum += arr[i]
 }
 console.log(sum)

 // 3. Given two numbers. Print powers of 2 between that numbers. (without using Math.pow)
 function foo(a,b){
     let result = 1;
     a = 7
     b = 45
     for(let i = a ; i<b ; i++) {
         for(let j = 1 ; result < b ; j++) {
             result = result*2
             if(result>a && result<b){
                 console.log(result)
             }
         }
     }
 }

// 4. Given a number as input, insert dashes (-) between each two even numbers.
 let num = prompt()
 let result = num[0];
 for(let i = 1; i<num.length;i++) {
     if(num[i - 1]%2===0 && num[i]%2===0) {
         result = result + '-' +  num[i]
     }else {
         result = result +  num[i]
     }
 }
 console.log(result)

 // 5.Insert a n positive number. Print the n-st prime number.
 let n_th = +prompt("Enter a number")
 let arr = []

 function isPrime(num){
     if (num<=1) return false;
     debugger
     for(let i = 2; i * i <= num; i++) {
         if(num % i === 0) return false;
     }
     arr.push(num);
     return arr
 }

 for(let i=2; i <= 1000; i++) {
     isPrime(i)
 }
 console.log(arr[n_th])
