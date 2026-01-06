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
