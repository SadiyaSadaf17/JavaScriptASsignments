import exp from "express"
//create a mini -express (seperate route)-app
export const productApp=exp.Router()

let products=[];
//get request of all prducts
productApp.get('/products',(req,res)=>{
    // send res to client 
    res.status(200).json({message:"all products",payload:products})
})

//post req handling 
productApp.post('/products',(req,res)=>{
     let newProduct=req.body;
     products.push(newProduct);
     res.status(201).json({message:"Product added"})
})

//put req handling 
productApp.put('/products/id',(req,res)=>{

     //get modified user from req
     let modifiedProduct=req.body;
     //find user with id exists in array
     let Productid=products.findIndex((ele)=>ele.productId===modifiedProduct.productId);
     // user not found,send res as "user not found"
     if(Productid===-1)
     {
          return res.status(404).json({message:"product not found"});
     }
     // if found then modify the user
     let deletedProduct=products.splice(Productid,1,modifiedProduct);
          res.status(200).json({message:"product modified"});
     });

//read productby id
productApp.get("/products-id/:id",(req,res)=>{
     let Productid=Number(req.params.id)
     let product=products.find((prodObj)=>prodObj.productId===Productid)
     if(!product){
     return res.status(404).json({message:"No such product"})
     }
     res.status(202).json({message:"product found",payload:product})

})
//to delete product by id
productApp.delete("/products-delete/:id",(req,res)=>{
     let productId=Number(req.params.id)
     let productIndex=products.findIndex((prodObj)=>prodObj.productId==productId)
     if(productIndex===-1){
     return res.status(404).json({message:"No such product exit"})
     }
     let deletedProduct=products.splice(productIndex,1)
     res.status(202).json({message:"product deleted",payload:deletedProduct})
})

//to get product by brand
productApp.get("/products-brand/:brand",(req,res)=>{
let productBrand=req.params.brand;
let prodDetails=products.filter((prodObj)=>prodObj.brand===productBrand)
if(!prodDetails){
    return res.status(404).json({message:"product not found"})
}
res.status(200).json({message:"product Found",payload:prodDetails})

})