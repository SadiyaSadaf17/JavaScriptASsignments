/*Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid
*/

let enrollmentDeadline = new Date("2026-01-20");
let todayDate=new Date();
if(enrollmentDeadline>todayDate){
    console.log("Enrollment Open");
}
else{
    console.log("Enrollment Closed");
}

let date1=new Date("2026-02-30");
let month=date1.getMonth()
let date=date1.getDate()
let a=new Date(2026,2,0)
console.log(a);
