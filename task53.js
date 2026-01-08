/*Assignment 3: Application Settings Controller
---------------------------------------------
Scenario : A web app stores user preferences as settings.

Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


Tasks :
    1.Toggle theme between "light" and "dark"
    2. Turn autoSave to true
    3. Remove the notifications setting
    4. Freeze the settings object so it cannot be modified*/

const settings = {
  theme: "dark",
  notifications: true,
  autoSave: false,
  language: "en"
};

let res1=(settings.theme==="light")?"dark":"light";
console.log(res1);

settings.autoSave=true;
console.log(settings.autoSave);

delete settings.notifications;
console.log(settings);

Object.freeze(settings);

settings.language="us";//if we modify here it will not work because before this we freezed the settings objects
console.log(settings);