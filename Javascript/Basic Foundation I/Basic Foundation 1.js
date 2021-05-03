//one
// 1 - 255
function one(){
    var arr=[];
    for(var i = 0 ; i<255 ; i++){
        arr[i] = i+1;
    }
    return arr;
}

//--------

//two
//Get even 1000

function evenNum(){
    var sum =0;
    for(var i = 0; i <= 1000 ; i++){
        if(i%2 == 0){
            sum += i;
        }
    }
    return sum;
}

//-----

//three
//Sum odd 5000

function oddnum(){
    var sum =0;
    for(var i = 0; i <= 5000 ; i++){
        if(i%2 !== 0){
            sum += i;
        }
    }
    return sum;
}

//------
//four
//Iterate an array

function iteratearr(arr){
    var sum = 0;
for (var i = 0 ; i<arr.length ; i++){
    sum += arr[i];
}
return sum;
}

//------
//five
//Find max

function findmax(arr){
    var max = arr[0]
    for(var i = 1; i<arr.length ; i++){
        if (arr[i]> max){
            max = arr[i];
        }
    }

    return max;
}

//------
//six
//Find average

function findavg(arr){
    var sum = 0;
    var avg = 0;
    for (var i=0 ; i< arr.length ; i++){
        sum += arr[i];
    }
    avg = sum / i;
    return avg;
}


//------
//seven
//Array odd

function arrayodd(){
    var arr = [];
    for (var i=0; i<50 ; i++){
        if (i%2 != 0){
            arr.push(i);
        }
    }

    return arr;
}


//------
//eight
//Greater than Y 

function GTY(num, arr){
    var g = 0;
    for( var i=0 ; i<arr.length ; i++){
        if(arr[i]> num){
            g++
        }    
    }

    return g;
}

//------
//nine
//Squares

function squares(arr){
    for( var i = 0 ; i< arr.length ; i++){
        arr[i] = arr[i]**2;
    }
    return arr;
}

//------
//ten
//Negatives

function negatives(arr){
    for (var i = 0 ; i < arr.length ; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}


//------
//eleven
//Max/Min/Avg

function mma(arr){
    var sum = 0;
    var avg = 0;
    var max = arr[0];
    var min = arr [0];
    var arr2=[];

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (arr[i] > max){
            max = arr[i];
        }

        if (arr[i] < min){
            min = arr[i];
        }
    }
    avg = sum / i;

    arr2.push(max);
    arr2.push(min);
    arr2.push(avg);
    
    return arr2;
}


//------
//twelve
//Swap Values

function swaparr(arr){

    var temp;
    temp = arr[0];
    arr[0] = arr [ arr.length -1];
    arr [arr.length -1] = temp;

    return arr;
}


//------
//thirteen
//Number of string

function dojo(arr){
    for(var i = 0 ; i< arr.length ; i++){
        if(arr[i]<0){
            arr[i] = "Dojo"
        }
    }
    return arr;
}

