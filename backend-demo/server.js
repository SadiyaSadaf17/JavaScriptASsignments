//create HTTP server
//Import express module
import exp from 'express';
import { userApp } from './APIS/userAPI.js';
import {productApp} from './APIS/productAPI.js';
//create server
const app=exp();

//Assigning port number
app.listen(3000,()=>console.log("Http server listening on port 3000"));

//body parsing middlewarw
app.use(exp.json());

app.use('/user-api',userApp)
app.use("/product-api",productApp)

//create a custom middlewarw

//create API(req handlers -route)
//^USER API
//test local in-memory data
//get req handling 
//Route : handling the any HTTP req
//syntax:app.any HTTP req ,callback function 

