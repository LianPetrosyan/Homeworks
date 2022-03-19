// 1. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
// starting from a to b spaced by step.

function foo(a, b, step){
    let arr = []
    for( i = a ; i<=b ; i=i+step){
        arr.push(i)
    }return arr
}


// 2. Given a string and a symbol. Find the number of occurrences of the symbol in the string.

function foo(text, symbol){
    let count = 0
    for( i = 0; i!= text.length; i++){
        if(text[i] === symbol){
            count++
        }else continue
    }return count
}

// 3. Given a string. Check whether the string is palindrome or not.

function foo(text){
    if(text.length === 0){
        return "no"
    }
    for( i = 0; i!== Math.floor(text.length/2); i++){
        if(text[i] === text[text.length-1-i]){
            continue
        }else return "no"
    }return "yes"
}

// 4. Given an array of numbers. Find the maximum element in array.

function foo(arr){
    let result = arr[0]
    for( ; result <= arr[arr.length-1]; i++){
        if(arr[i]<=arr[i+1]){
            result = arr[i+1]
            continue
        }else if (arr[i]>=arr[i+1]){
            continue
        }
        else return arr[i]
    }return result
}

// 5. Given an array. Create the array which elements are products between two neighbours.

function foo(arr){
    let newArr = []
    let element
    for(i = 0 ; i < arr.length-1 ; i++){
        element = arr[i]*arr[i+1]
        newArr.push(element)
    }return newArr
}

// 6. Given a string and symbols. Change first symbol by the second one in the string.

function foo(string, symbol1, symbol2){
    let newString = ""
    for(i = 0; i < string.length ; i++){
        if(string[i] === symbol1){
            newString = newString +symbol2
            continue
        }else newString += string[i]
        continue
    }return newString
}

// 7. Print the following number pattern

let number = "12345"
let pattern = ""
for (let i = 0 ; number[i] <= number[number.length-1] ; i++){
    pattern += number[i]
    console.log(pattern)
}
let number1 = 12345
for (let j = Math.trunc(number1/10) ; j > 0 ;j = Math.trunc(number1/10)){
    number1 = Math.trunc(number1/10)
    console.log(number1+"")
}
