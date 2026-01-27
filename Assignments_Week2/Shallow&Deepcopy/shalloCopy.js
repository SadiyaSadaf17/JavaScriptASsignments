/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t*/

const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
const userCopy={...user};
userCopy.name="Jyosna"
userCopy.preferences.theme="light"
console.log("original user ",user)
console.log("copied User ",userCopy);
//iv. Observe what changes and what doesn’t
//when changing userCopy.preference .theme to light,it is also reflecting in Original user