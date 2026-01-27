/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years*/

let dob ="2000-05-15";
let birthDate=new Date(dob);

let todaydate=new Date();

let age=todaydate.getFullYear()-birthDate.getFullYear()
let monthDiff=todaydate.getMonth()-birthDate.getMonth()
if(monthDiff<0||(monthDiff===0 && todaydate.getDate()<birthDate.getDate())){
    console.log("Age is "+age);
}
else{
  console.log("Age is "+age);
}