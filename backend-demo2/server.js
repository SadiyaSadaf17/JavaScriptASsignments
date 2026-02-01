import exp from 'express';
import {connect} from 'mongoose';
import {userApp} from './API/userAPI.js';
import {productApp} from './API/productAPI.js';
const app=exp();

const port=3000;
//connect to db server
async function connectDB()
{
    try {
    await connect('mongodb://localhost:27017/mernDB')
    console.log("succesfully connected database");
    //.then(()=>{console.log("succesfull")})
    //.catch(()=>{console.log("failed")})
    app.listen(port,()=>{console.log("server running on port: 3000");})
    }
    catch(err)
    {
       console.log("error",err);
    }
}

connectDB()
app.use(exp.json());

app.use('/user-api',userApp);
app.use('/product-api',productApp);
//app.use('/product-api',productApp);

//error handling 
app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",reason:err.message})
})