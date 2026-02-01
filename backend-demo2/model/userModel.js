import {Schema,model} from 'mongoose';

//create user schema 
const userSchema=new Schema({
username:{
    type:String,
    required:[true,"username is required"],
    minLength:[4,"min length is should be 4"],
    maxLength:[8,"max length exceeded"]
},
password:{
    type:String,
    required:[true,"password is required"]
},
age:{
    type:Number,
    requires:[true,"age is required"],
    min:[18,"age should be above 18"],
    max:[25,"age should be below 25"],
}

},{
    strict:"throw",
    timestamps:true
});




export const UserModel=model("user",userSchema)
