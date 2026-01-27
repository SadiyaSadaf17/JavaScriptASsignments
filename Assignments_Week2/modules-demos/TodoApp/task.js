import {validatePriority,validateDueDate,validateTitle} from "./validator.js"
 // TODO: Import validator functions
// import { ... } from './validator.js';
 const tasks = [];
 let taskId=1;
// 1. Add new task
function addTask(title, priority, dueDate) {
    // Validate using imported functions
    const validTitle=validateTitle(title)
    const validPriority=validatePriority(priority)
    const validdueDate=validateDueDate(dueDate)
    // If valid, add to tasks array
    const newTask={id:taskId++,title,priority,dueDate,completed:false}
    if(validTitle===true && validPriority===true && validdueDate===true){
        tasks.push(newTask)
        return "Success"
    }
    else{
        return "Task not added"
    }
    // Return success/error message
}
                    
// 2. Get all tasks
function getAllTasks() {
    // Return all tasks
    return tasks
}
                    
// 3. Mark task as complete
function completeTask(taskId) {
    // Find task and mark as complete
  const task = tasks.find(t => t.id === taskId);
  if (!task) return "Task not found";

  task.completed = true;
  return "Task marked as complete"
}

// Export functions
export default {addTask,getAllTasks,completeTask};