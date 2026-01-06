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
