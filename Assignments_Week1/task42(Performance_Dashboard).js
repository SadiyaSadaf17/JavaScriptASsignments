/* ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    
1.filter() students who passed (marks ≥ 40)
2.map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D

   
3.reduce() to calculate average marks
4.find() the student who scored 92
5.findIndex() of student "Kiran" */

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//1.filter() students who passed (marks ≥ 40)
let res1=students.filter((each)=>each.marks>=40)
console.log(res1);

students.map((each)=>{
  if(each.marks>=90){
    each.grade="A"
  }
  else if(each.marks>=75 && each.marks<90){
    each.grade="B"
  }
  else if(each.marks>=60 && each.marks<75){
    each.grade="C"
  
  }
  else{
    each.grade="D"
  }
})
console.log(students);

//3.reduce() to calculate average marks
let res2=students.reduce((acc,ele)=>{
  return acc+ele.marks
},0)
console.log(res2/students.length)

//4.find() the student who scored 92
let res3=students.find((each)=>each.marks===92)
console.log(res3)

//5.findIndex() of student "Kiran" */
let res4=students.findIndex((each)=>each.name==="Kiran")
console.log(res4);
