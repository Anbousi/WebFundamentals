//one
//sigma
function sigma(num){
    var sum = 0;
    if(num > 0){
    for (var i = 1 ; i<= num ; i++){
        sum += i;
    }
    return sum;
    }
    else if (num == 0){
        return sum;
    }
    else {
        alert("Please enter a positive value");
        console.log("Please enter a positive value");
    }
}

//---------------------------------------------

//two
//Factorial
function factorial(num){
    if(num>0){
        var factorial = 1;
        for(var i = 1 ; i<= num ; i++){
            factorial *= i;
        }
    }
    else if (num <=0){
        alert("Please enter a positive value");
        console.log("Please enter a positive value");
    }
    return factorial;
}
//------------------------------------------------

//three
//Fibonacci

function Fibonacci(num){

    var num1 = 0;
    var num2 = 1;
    var fib;
    if(num == 0){
    return 0;
    }
    if(num == 1){
    return 1;
    }
    for (var i = 2; i <= num; i++) {
        fib = num1 + num2;
        num1 = num2;
        num2 = fib;   
    }
    return fib;
    }


//four
//Array: Second-to-Last

function SecondToLast(arr){
    if(arr.length >= 2){
        return arr[arr.length - 2];
    }
    else{
        return null;
    }
}


//five
//Array: Nth-to-Last

function NthToLast(arr,num){
    if (arr.length >= num){
        var x = arr[arr.length - num]
        return x;
    }
    else {
        return null;
    }
}

//six
//Second-Largest

function SecondLargest(arr){

	for (var i = 1; i < arr.length; i++)  // we can use "arr.sort(function(a, b){return a-b});" to sort accending
    for (var j = 0; j < i; j++)
        if (arr[i] < arr[j]) {
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
        
    var max=arr[arr.length-1];
    for (var i = arr.length - 1; i>=0 ; i--){
        if(arr[i] < max){
            max = arr[i];
            break;
        }
    }
    return max;
}

//---------------------------------------

//seven
//Double Trouble

function DoubleTrouble(arr){
    const x = arr.length;
    for ( var i = 0; i<x; i++){
        var temp = arr.shift();
        arr.push(temp,temp);
    }
    return arr;
}
