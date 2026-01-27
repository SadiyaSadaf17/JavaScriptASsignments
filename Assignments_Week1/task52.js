/*Assignment 2: Exam Result Summary
---------------------------------
Scenario : Marks are stored subject-wise for a student.

Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

Tasks:
    1. Calculate total marks
    2. Calculate average marks
    3. Find the highest scoring subject
    4. Add a new subject computer: 908*/
    
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
let totalMarks=0;
let c=0;
let highScore=0;
for(let i in marks){
    totalMarks+=marks[i];
    c+=1;
    if(highScore<marks[i]){
        highScore=marks[i]
    }
}
Avg=totalMarks/c
console.log(totalMarks);
console.log(Avg);
console.log(highScore)

