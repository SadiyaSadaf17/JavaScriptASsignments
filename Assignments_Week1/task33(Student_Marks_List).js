/*Assignment 5: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92 */

const marks = [78, 92, 35, 88, 40, 67];

let res1=marks.filter((ele)=>ele>=45);
console.log(res1);

let res2=marks.map((each)=> each+5)
console.log(res2);

let res3=marks.find((each)=>each<40)
console.log(res3);

let res4=marks.findIndex((ele)=>ele===92)
console.log(res4);

let res5=marks.reduce((acc,ele)=>acc>ele?acc:ele)
console.log(res5)
