/*Project story:
-------------
“We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

Data setup:
-----------
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};
 */


const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

//MODULE-1 :USER PROCESSING ENGINE

//-> Get only active users
let activeUsers=users.filter((each)=>each.active===true)
console.log(activeUsers)

// -> Extract names of active users
let activeUserNames=activeUsers.map((each)=>each.name)
console.log(activeUserNames)

//-> Check if any admin exists
let isadminExit=users.some((each)=>each.role==="admin")
console.log(isadminExit)

//-> Find user by id
let userid=1;
let foundUser=users.find((each)=>each.id===userid)
console.log(foundUser)

// -> Deactivate a user immutably */
let deactiveUser=users.map((each)=>(each.id===userid)?
    {...each,active:false}:each 
)
console.log(deactiveUser);

//*MODULE 2: COURSE CATALOG ENGINE

//-> Get published courses
let publishedUsers=courses.filter((each)=>each.published===true)
console.log(publishedUsers)

//-> Sort courses by price (high → low)
const sortedCourses = [...courses].sort((a, b) => b.price - a.price);
console.log(sortedCourses)
//-> Extract { title, price } only
let Coursetitle=courses.map((each)=>({
    title:each.title,
    price:each.price
}))
console.log(Coursetitle)

//-> Calculate total value of published courses
let totalValue=publishedUsers.reduce((total,each)=>total+each.price,0)
console.log(totalValue)

// -> Add a new course immutably*/
let newCourse={
    id: 104, title: "python", price: 1999, published: false
}
let updatedCourse=[...courses,newCourse]
console.log(updatedCourse)




//MODULE 3: SHOPPING CART ENGINE 

//-> Merge cart with courses to get full course info
let mergedCart = cart.map(item => {
  let course = courses.find(c => c.id === item.courseId);
  return { ...item, ...course };
});
console.log(mergedCart)
//-> Increase quantity of a course (immutably)
let increaseQty=mergedCart.map((each)=>({...each,qty:each.qty+1}))
console.log(increaseQty);
//  -> Remove a course from cart
const removeFromCart = (courseId) =>
  cart.filter(item => item.courseId !== courseId);
console.log(removeFromCart(101))

//-> Check if all cart items are paid courses
const allPaidCourses = cart.every(item => {
  const course = courses.find(c => c.id === item.courseId);
  return course && course.price > 0;
});
console.log(allPaidCourses)

//MODULE 4: ROLE & PERMISSION ENGINE
  
//-> Get all role names
const roleNames = Object.keys(roles);
console.log(roleNames)

// ->Check if student can delete
const canStudentDelete = roles.student.includes("delete");
console.log(canStudentDelete)

//-> Create a flat list of all unique permissions
const allUniquePermissions = [
  ...new Set(Object.values(roles).flat())
];
console.log(allUniquePermissions)

// 4. Add new role moderator immutably
const addModeratorRole = {
  ...roles,
  moderator: ["view", "update"]
};
console.log(addModeratorRole)