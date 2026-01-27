/* 
i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                      }

*/

export function validateTitle(title) {
                       if(title.length===0){
                        return "Title is empty"
                       }
                       if(title.length<3){
                        return "Title should have mininmum 3 chars"
                       }
                       return true;
                      }
 export function validatePriority(priority) {
        const allowed=["low","medium ","high"]
        if(allowed.includes(priority)){
          return true
        }
        else{
          return false
        }
                       
                      }
  export function validateDueDate(date) {
      let dueDate=new Date(date)
      let todayDate=new Date()
      if(dueDate>=todayDate){
        return true
      }
      else{
        return false
      }
                        
                      }