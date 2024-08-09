
// /// swap the value of two variables
// let a = 100 ; 
// let b = 200 ;
// let temp = 0;

// temp = a; // temp = 100
// a = b; // a = 200
// b = temp; // b = 100


// console.log("Value of a "+ a);
// console.log("Value of b "+ b);

// let x = 10;
// let y = "Vikash";

// console.log(typeof y);
// console.log(typeof x);

/// array in js

let arr = [1,2,3,4,5]; 

// console.log(arr[2]);
// console.log(arr[0]);
// console.log(arr[4]);
// console.log(arr[1]);

// < 
// > 
// <=
// >=
// ==


// 15; check is number even or odd
if( 15 % 2 == 0){
    console.log("Even");
}else{
    console.log("Odd");
}


let length = arr.length; // length = 5;

// i = i + 1;
///-------------->
               // 5 < 5 // false
for(let i = 0; i < length; i = i + 1){  /// i = 5;
    console.log(arr[i]); // 1 , 2

}
/// end of the loop

/// check value in array is even or odd using for loop
for(let i = 0 ; i < arr.length; i  = i + 1){
    if(arr[i] % 2 == 0){
        console.log("event",arr[i]);
    }else{
        console.log("odd",arr[i]);
    }
}










