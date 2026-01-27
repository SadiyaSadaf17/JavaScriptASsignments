import tasks from "./task.js";
//  // import { ... } from './task.js';
 // Test your module system
// 1. Add some tasks
console.log(tasks.addTask("Learn JavaScript", "high", "2026-12-01"));
console.log(tasks.addTask("Practice DSA", "medium", "2026-11-15"));
console.log(tasks.addTask("Go Gym", "low", "2026-10-01"));
// 2. Display all tasks
console.log(tasks.getAllTasks());
 // 3. Complete a task
 console.log(tasks.completeTask(1));
 // 4. Display all tasks again
 console.log(tasks.getAllTasks());