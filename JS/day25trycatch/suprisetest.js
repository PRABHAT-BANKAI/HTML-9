let arr = [1, 8, 5, 2, 4];
let arr2 = [];
let n = arr.length - 1;
for (let i = n; i >= 0; i--) {
  arr2.push(arr[i]);
}
console.log(arr2);
for (let i = 0; i <= arr2.length - 1; i++) {
  if( arr2[i]%2==0){
    console.log(arr2[i])
  }
}
