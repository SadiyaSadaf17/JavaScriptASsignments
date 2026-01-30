import exp from "express"
//create a mini -express (seperate route)-
export const userApp=exp.Router()

let users=[];
//get req handling 
//Route : handling the any HTTP req
//syntax:app.any HTTP req ,callback function 

userApp.get('/users',(req,res)=>{
    // send res to client 
    res.status(200).json({message:"all users",payload:users})
})

//post req handling 
userApp.post('/users',(req,res)=>{
     let newUser=req.body;
     users.push(newUser);
     res.status(201).json({message:"user created"})
})

//put req handling 
userApp.put('/users/id',(req,res)=>{

     //get modified user from req
     let modifiedUser=req.body;
     //find user with id exists in array
     let userid=users.findIndex((ele)=>ele.id===modifiedUser.id);
     // user not found,send res as "user not found"
     if(!userid)
     {
          return res.status(404).json({message:"user not found"});
     }
     // if found then modify the user
     let deletedUser=users.splice(userid,1,modifiedUser);
          res.status(200).json({message:"user modified"});
     });

//read user by id
userApp.get('/users/:id',(req,res)=>{

          console.log(req.params)
          let userId=Number(req.params.id) // {id:200}
          let user=users.find((ele)=>ele.id===userId)
          if(!user)
          {
               return res.status(404).json({message:"user not found"});
          }
          res.status(200).json({message:"user",payload:users})
     })
//delete req handling 
userApp.delete('/users/:id',(req,res)=>{
    
  let userId=Number(req.params.id);
  let userIndex=users.findIndex((ele)=>ele.id===userId)
  if(userIndex===-1)
  {
    return res.status(404).json({message:"user not found"});
  }

  let deletdUser=users.splice(userIndex,1);
  res.status(200).json({message:"deleted"})
})
