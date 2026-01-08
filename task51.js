//Assignment 1: User Profile Manager
//----------------------------------
//Scenario : You are managing a logged-in user’s profile in a web application.

const user={
    id:101,
    name:"Ravi",
    email:"ravi@gmail.com",
    role:"Student",
    isActive:true
}
console.log("Name is "+user.name);
console.log("EMail is "+user.email)
user.lastLogin="2026-01-01"
user.role="admin"
delete user.isActive
console.log(Object.keys(user));
