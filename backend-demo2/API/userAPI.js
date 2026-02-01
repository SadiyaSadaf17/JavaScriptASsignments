import exp from 'express';
import {UserModel} from '../model/userModel.js';
export const userApp=exp.Router();

userApp.post('/users',async (req,res)=>{
    //get newUser from req
    let newUser=req.body;
    console.log(newUser)
    //create new user document
    let newUserDoc=new UserModel(newUser)
    //save in db
    await newUserDoc.save();
    res.status(201).json({message:"user creted"})

})

userApp.get('/users',async(req,res)=>{
     // read the users
    let usersList=await UserModel.find()
    res.status(200).json({message:"users",payload:usersList});
})

//read user by id
userApp.get('/users/:id',async (req,res)=>{
    //get objectID from url parse
    let objId=req.params.id;
    //find user in DB 
    let userObj=await UserModel.findById(objId);
    //send res
    res.status(200).json({message:"user",payload:userObj})
})

//update user
userApp.put("/users/:id",async (req,res)=>{
    //get objId from url params
    let objId=req.params.id
    //get modified from user
    let modifiedUser=req.body;
    //make update
    let latestUser=await UserModel.findByIdAndUpdate(objId,
        {$set:{...modifiedUser}},
        {new:true,runValidators:true});
    //send res
    res.status(202).json({message:"user modified",payload:latestUser})
})

//Delete user 

userApp.delete("/users/:id",async (req,res)=>{
    //get obj by id
    let objId=req.params.id;
    //delete user by id 
    let deletedUser=await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message:"user remove",payload:deletedUser})

})