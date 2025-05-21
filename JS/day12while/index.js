// While loop Do while loop

// initialization
// conditon
//{
// increment
//}

// while(condition){
//execution
// increment decrement
//}

// let num = 15;

// let start = 1;

// while(start<=num){   //5<=11    first condition check if true then it will be executed the block

//   console.log(start)//1//2//3//4//5

//   start++
//   num--
// }

// do{

// }while()

// let i = 1

// do{
//   i++
//   console.log(i)

//   // code execute
// }while(i<=5)//4/5<=5

// let number = 100
// let count = 0

// for(let i=1;i<=number;i++){
//    if(number%i==0){
//     console.log(i)
//     count++
//    }
// }

// if(count==2){
//   console.log("prime number",count)
// }else{
//   console.log("not a prime number",count)
// }

// for (let i = 1; i <= 100; i++) {// nested for loop
//   let count = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       count++;
//     }
//   }

//   if (count == 2) {
//     console.log("prime number", i);
//   } else {
//     console.log("not a prime number", i);
//   }
// }

let count = 0
for(let i=1;i<=5;i++ ){
   for(let j=1;j<=5;j++ ){
    count++
}
}

console.log(count)