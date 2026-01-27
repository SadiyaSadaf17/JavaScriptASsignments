/*HANDS-ON 2: Course Price Tag Labeler
------------------------------------
Initial data:
     let price = 1299;

Tasks:
   1. If price < 500 → "Budget Course"
   2. If price between 500–1000 → "Standard Course"
   3. If price > 1000 → "Premium Course"
   4. Store label in courseTag
   5. Print the label*/

let price=1299;
let label;
if(price<500){
    label="Budget Course";
}
if(price>600 && price<1000){
    label="Standard Course";
}
if(price>1000){
    label="Premium course";
}
console.log(label);