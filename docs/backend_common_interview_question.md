# Back end Question
#Interview Question
# Backend Question

#Node.js
* what is Node
1. Node.js is a JavaScript runtime environment/systems built on Chrome’s V8 JavaScript engine.
2. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
3. It’s package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

# What is Runtime?

Program lifecycle phases:
	Compile time, link time, load time, run time.

Run time system:
	Implements portions of an execution model.

# what is Event-driven:
	Event-driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions, sensor outputs, or messages from other programs/threads.

# what is Non-Blocking IO:
	Non-blocking IO means for I/O operation Node.js won’t block until that operation finishes. Actually, the IO operation is executed asynchronously, the main thread will continue execute the continuing context. When the IO operation is finished, it will be put back into the event loop until the main thread take it, then Node.js will run the callback or return operation’s result.

Blocking refers to operations that block further execution until that operation finishes. Non-blocking refers to code that doesn't block execution. In the given example, localStorage is a blocking operation as it stalls execution to read. On the other hand, fetch is a non-blocking operation as it does not stall alert(3) from execution.

# Why u use Node.js?
1. Event-driven

2. Non-blocking IO mechanisms

Made it Lightweight and efficient. Good for IO bound application.
IO network, DB, file system. 
Like in our Front end request for DB.


# what is Express
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.


With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.

Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.

# Why use Express?
It provides a robust set of features for web and mobile applications.
Like the routing system, middleware, and allowing many extensions 



# Body-parser, it’s a Express extensions for Post body, url Paramus & query string parsing.

and has useful features.
You wanna sessions, already there.




## Routing
Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).


Route vs handler vs middleware

    * router
Express.Router is a class to create modular, mountable route handlers.
A router instance is a complete middleware and routing system.

## Routing parameter
Route parameter are named URL segments that are used to capture the values specified at their position in the URL..

## Request body

## URL query



## Route Path
* strings
* String patterns
* Regular expressions


	app.METHOD(PATH, HANDLER);

# What is Middleware
Middleware functions are functions that have access to the request object, the response object, and the next middleware function in the application’s request-response cycle.

## Why can middleware do?
Middleware functions can perform the following tasks:
* execute any code
* Make changes to the request and response objects
* End the request-response cycle
* Call the next middleware function in the stack

## How many types of middleware:
* Application-level middleware 
    * Authentication middleware.  
    * App.use()
    * If authenticated next() else res.redirect(‘’/login);
* Router-level middleware
    * Time log.  
    * Route.use()
* Error-handling middleware
    * 4 arguments
    * App.use(function(err, req, res, next){...; res.status(500).send(“error...”);})
* Built-in middleware.     Like express.static(path.join(__dirname, “public”));
* Third-party middleware.  Like body-parser

## Why use middleware?


## Common middleware?
* body-parser
* Cors.     Enable cross-origin resource sharing CORS with various options
* Morgan.  HTTP request Logger
* Errorhandler.    
* Response-time.     Record HTTP response time
* Serve-static.         Express.static
* Session.       Server-based sessions
* Timeout.     Set a timeout period for HTTP request processing

    * how to handle request


	* how many ways to post a virable to server


* Restful API  RestAPI Best Practice
* resource-oriented design.    Readability and ease of use
    * Resources. A resource has data, gets nested, and there are methods that operate against it.
    * Collection. A group of resources is called a collection.
    * URLs. URL identifies the online location of resource or collection.       
    * 
    * 
    * Keep verbs out of your resource URLs
Use kebab-case for URLs
Use camelCase for parameters in the query string or resource fields
Always prefix API endpoints with /api, to differentiate it from your application routes.
Always use a plural nouns for naming a url pointing to a collection:
/api/users, /api/programs, etc
In the source code convert plurals to variables and properties with a List suffix.
Always use a singular concept that starts with a collection and ends to an identifier
/api/users/{id}
Try your best to avoid

GET /blogs/:blogId/posts/:postId/summary

Keep verbs out of your resource URLs

Use verbs for non-resources. 

The request body or response type is JSON then please follow camelCase for JSON property names to maintain the consistency.


Explain CRUD functionalities using HTTP methods
* Get. Retrieve a representation of a resource
* POST. To create new resources and sub-resources
* Put To update existing resources
* Patch To update existing resources, it only updates the field that were supplied, leaving the others alone.
* DELETE.  To delete existing resources

For nested resources, use the relation between them in the URL. For instance, using I’d to relate an employee to a company.

Use a simple ordinal number for a version with a v prefix. Move it all the way to the left in the URL so that it has the highest scope

Response messages must be self-descriptive

Use only these 8 status codes to send with your response to describe whether everything worked. The client app did something wrong or the API did something wrong

200 OK response represents success for GET, PUT or POST requests.
201 Created for when a new instance is created. Creating a new instance, using POST method returns 201 status code.
304 Not Modified response is to minimize information transfer when the recipient already has cached representations.
400 Bad Request for when the request was not processed, as the server could not understand what the client is asking for.
401 Unauthorized for when the request lacks valid credentials and it should re-request with the required credentials.
403 Forbidden means the server understood the request but refuses to authorize it.
404 Not Found indicates that the requested resource was not found.
500 Internal Server Error indicates that the request is valid, but the server could not fulfill it due to some unexpected condition.

Provide total numbers of resources in your response.

Accept limit and offset parameters

Pagination, filtering, and sorting don’t need to be supported from start for all resources. Document those resources that offer filtering and sorting.



* req param, body, url.query

#MongoDB:                           
* what is 
* collection                            table
    * document                          row
    * attribute                         column


document                                table
#SQL vs NoSQL
* relational vs non relational (document based)
* schema table  vs key-value pair (JSON like)
* query  sql grammer           js

# What is MongoDB?
A cross-platform, document oriented database that provides, high performance, high availability, and easy scalability. It works on concept of collection and document.

# MongoDB Database
Database is a physical container for collections.
Each database get its own set of files on the file system.


# MongoDB Collection
Collection is a group of MongoDB documents. it is equivalent of an RDBMS table.
A collection exists within a single database.
Not enforce a schema.
Documents within a collection can have different fields.
Typically, all documents in a collection are of similar or related purpose.

# MongoDB Document
A document is a set of key-value pairs.
Document have dynamic schema which means documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection’s documents may hold different types of data.

# Why use MongoDB
Organizations of all sizes are adopting MongoDB because it enables them to build applications faster, handle highly diverse data types, and manage applications more efficiently at scale.
* Development is simplified as MongoDB documents map naturally to modern, object-oriented programming languages.
* MongoDB can be easily scaled within and across multiple distributed data centers.
* Working with data as flexible JSON documents, rather than as rigid rows and columns, is proven to help developers move faster.



