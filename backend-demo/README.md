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


HTTP REQ types
GET-Read a resource(products,user)
POST =create resource
put-update a resource
delete-delete a resource

for any server running in the local computer the ip address is 127.0.0.1 fixed 
http://127.0.0.1 if use this it can able to point http server and db server so for that 

USER API:

 GET http://127.0.0.1:3000/users
 POST http://127.0.0.1:3000/user
 PUT http://127.0.0.1:3000/user/<id>
 DELETE http://127.0.0.1:3000/user/<id>

instead if ip address use :  http://localhost:3000/user/<id> domain name

Rest client is act like a postman to test the Routers 
download from the extensions : Rest client 
next: create a file anyname.http in the give the path of the router

