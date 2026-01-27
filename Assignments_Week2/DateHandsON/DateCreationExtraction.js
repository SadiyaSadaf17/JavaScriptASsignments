/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss*/

let date1=new Date();
console.log("Year is ",date1.getFullYear());
console.log("Month is ",date1.getMonth())
console.log("Date is ",date1.getDate())
console.log("Day is ",date1.getDay())
console.log("Hours is ",date1.getHours())
console.log("Minutes is ",date1.getMinutes())
console.log("Seconds is ",date1.getSeconds())
console.log(date1.toString())
