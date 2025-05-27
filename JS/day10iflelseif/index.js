//grade

// variable declare keywords let const var
const  percentage = 50

if(percentage>= 90){
  console.log("A+")
}else if(percentage>= 80){
  console.log("A")
}else if(percentage>= 70){
  console.log("B+")
}else if(percentage>= 60){
  console.log("B")
}else if(percentage>= 50){
  console.log("C")
}else{
  console.log("D")
}

// Range Programs (Grade, Interest, Bill) change password logic
// 1. Grade
// 2. Interest
// 3. Bill
// 4. Change Password


let oldPassword = 12345

let newPassword ;
let confirmPassword ;


if(oldPassword == 12345){
  console.log("Enter new password")
  newPassword = 123456
  console.log("Confirm new password")
  confirmPassword = 123456

  if(newPassword == confirmPassword){
    console.log("Password changed successfully")
  }else{
    console.log("Password not matched")
  }
}


