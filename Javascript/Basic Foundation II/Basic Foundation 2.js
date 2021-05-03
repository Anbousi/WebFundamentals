//one
//Biggie Size

function makeItBig(arr){
    for(var i = 0 ; i< arr.length ; i++){
        if(arr[i]>0){
            arr[i] = "big"
        }
    }
    return arr;
}

//two
//Print Low, Return High

function printLow(arr){
    var max = arr[0];
    var min = arr [0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}

//three
//Print One, Return Another

function printone(arr){
    var k = 0;
    var odd;
    for(var i= 0; i<arr.length ; i++){
        if(arr[i]%2 != 0  && k == 0){
            k = 1;
            odd = arr[i];
        }
        if ( i != 0){
            console.log(arr[i]);
        }
    }
    return odd;
}


//four
//Double Vision

function double(arr){
    var arr2=[];
    for(var i=0; i<arr.length; i++){
        arr2[i] = arr[i] * 2;
    }
    return arr2;
}

//five
//Count Positives 

function CountPos(arr){
    var pos = 0;
    for( var i = 0; i<arr.length ; i++){
        if (arr[i]>0){ 
            pos++;
        }
    }
    arr[i-1] = pos;
}

//six
//Evens and Odds

function evenodd(arr){
    var even = 0;
    var odd = 0;
    for(var i = 0; i< arr.length ; i++){
        if(arr[i]% 2 == 0){
            even++;
            odd = 0;
        }
        if(arr[i]% 2 != 0){
            even = 0;
            odd++;
        }

        if (even == 3){
            console.log("Even more so!")
        }

        if (odd == 3){
            console.log("That's odd!")
        }
    }
}

//seven
//Increment the Seconds
function IncremenTheSeconds(arr){
    for(i = 0 ; i < arr.length ; i ++){
        if( i%2 == 1){
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
}

//eight
//Previous Lengths
function previousLengths(arr){
    for (var i = arr.length -1 ; i>=1 ; i--){
        var temp = arr[i-1].length;
        arr[i] = temp;
    }
    console.log(arr);
   return arr;
}

//nine
//Add Seven
function addSeven(arr){
    var arr2=[];
    for(var i = 0; i<arr.length ; i++){
        arr2[i] = arr[i] + 7;
    }
return arr2;
}


//ten
//Reverse Array
function reverseArr(arr){
    var temp;
    for ( var i = 0 ; i < arr.length /2 ; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 -i];
        arr[arr.length -1 - i] = temp;
    }
    return arr;
}


//eleven
//Outlook: Negative
function Negatives(arr){
    var arr2 = arr;
    for (var i = 0 ; i<arr.length ; i++){
        if (arr2 [i] < 0){
            arr2[i]*-1;
        }
    }
    return arr2;
}


//twelve
//Always Hungry
function Hungry(arr){
    var hungry = 1;
    for( var i = 0; i < arr.length ; i++){
        if (arr[i] === "food"){
            console.log("yummy");
            hungry = 0;
        }
    }

    if (hungry == 1){
        console.log("I'm hungry");
    }
}


//thirteen
//Swap Toward the Center
function swapTowardCenter(arr){
    if (arr.length >= 2){
    
        var temp = arr[0];
        arr[0] = arr[arr.length-1];
        arr[arr.length-1] = temp;

        if (arr.length > 5){
            temp = arr[2];
            arr[2] = arr[arr.length -3];
            arr[arr.length-3] = temp;
        }
    }

    else {
        console.log("Array length is not enough");
    }
    
    return arr;
}


//fourteen
//Scale the Array

function scaleArray(arr,num){
    for( var i = 0; i < arr.length ; i++){
        arr[i] = arr[i]*num;
    }
    return arr;
}