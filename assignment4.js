const courses = ["javascript", "react", "node", "mongodb", "express"];
let res1=courses.filter((ele)=>ele.length>5);
console.log(res1);

let res2=courses.map((each)=> each.toUpperCase())
console.log(res2);

let res3=courses.find((each)=>each==="react")
console.log(res3);

let res4=courses.findIndex((ele)=>ele==="node")
console.log(res4);

let res5=courses.reduce((acc,ele)=>{ 
    return acc+ele+" | ";
},"")
console.log(res5)
