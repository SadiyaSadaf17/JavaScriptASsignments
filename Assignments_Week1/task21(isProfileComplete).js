/* Initial data:
    let isLoggedIn = true;
    let isProfileComplete = false;

Tasks:
   1. If user is not logged in → show "Please login"
   2. If logged in but profile incomplete → show "Complete your profile"
   3. If logged in and profile complete → show "Welcome back!"
   4. Store the result in message
   5. Print the message
*/

let isLoggedIn=false;
let isProfileComplete=true;
if(!isLoggedIn){
    res="Please Login";
}
if(isLoggedIn===true && isProfileComplete===false){
    res="Complete your profile";
}
if(isLoggedIn===true && isProfileComplete===true){
   res="Welcome back!";
}

console.log(res);
