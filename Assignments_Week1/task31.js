/*Assignment 3: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28 */

const temperatures = [32, 35, 28, 40, 38, 30, 42];
let res1=temperatures.filter((ele)=>ele>35);
console.log(res1);
let res2=temperatures.map((ele)=> (ele*(9/5))+32)
console.log("Celecisus to farenheat "+res2)
let res3=temperatures.reduce((acc,ele)=>acc+ele)
console.log("Average of temperatures "+res3/temperatures.length);
let res5=temperatures.find((ele)=>ele>40)
console.log("Elements greater than 40 "+res5);
let res6=temperatures.findIndex((ele)=>ele===28)
console.log("INDEX OF 28 "+res6)