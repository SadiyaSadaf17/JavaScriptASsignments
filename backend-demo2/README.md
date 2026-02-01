### steps to create backend

Generate package.json
npm --node package manager 
npm init -y  
   it is node library librarian
  -y means accepting default values by yes(-y) giving

in package.json 
type:module use this because we use imports and exports if we use commonjs its not possible

2.create HTTP server
    a.Install & import "express" module 
    npm install express 

        when we install any module it searche for node_modules if not it creates it and downloada ll modules in to that.
        dependencies: what modules used directly check here
     
    b.import the module
       
      import exp from 'express' 
        if not mention path it searches in the node_modules

package.json version of express 
dependencies": 
    "express": "^5.2.1" // here the ^ represnts the the versions before 5.2.1 are supported


### connect mongoDB db

REST API instead of using mongoDB native Driver using the mongoose ODM[object document mapping]
moongoose is a tool

install mongoose and connect mongoDB 

Flow
a.Create Schema
b.Create Model
c.Build Routes
d.Handle CRUD operations