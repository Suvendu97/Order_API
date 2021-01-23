
# <span style="color:navy">Project Name:</span> *Order API*

## <span style="color:navy">Description:</span> its a RestFul API using Node.js, express and MongoDB to add order or find order details

  

## <span style="color:navy">Technologies and Software:</span>

- Postman
- Node.js
- Express.js
- MongoDB
- Robo3T

## <span style="color:navy">Features:</span>

- add order
- find a order

## <span style="color:navy">How to set it up on your local Computer?</span>
1) Clone the Package to your local System
2) Navigate to the folder wherein the project has been cloned
3) Open Terminal and type `npm install` [Make sure node is already installed in your system!]
4) Type `npm start`
5) The app should run on default port 8000 or if you've mentioned env port it'll run on that.

## <span style="color:navy">Run and Test:</span>
Launch <span style="color:orange">Postman</span> and pass the below requests

|<span style="color:green">URL PATH</span>          |<span style="color:green">Request Type</span>|<span style="color:green">Description</span>| <span style="color:green">Field-Input Required</span> |
| :---                                             |    :----:                                  |        :---:                              |          ---:                                    |
| localhost:8000/api/v1/order/add                  |POST                                        |add a order                              | Body: name, phone, email, value, item, deliveryDate and select x-www-form-urlencoded |
| localhost:8000/api/v1/order/find              |GET                                            |find order by a particular name          |Body: name and select x-www-form-urlencoded. |

  
## <span style="color:navy">Project Setup:</span>

 

**<span style="color:darksalmon">Environment: </span>**  *Windows 10*
	
**<span style="color:darksalmon">NPM: </span>**
			

 - express
 - mongoose
 
 
  Commands to start the server, to install the dependencies are:
```
npm start
npm install 

```
- now you can open any API Calling software (Postman) and test the code

**<span style="color:darksalmon">Other Applications: </span>**

 - Robo3T
 - Postman
 - vs code
