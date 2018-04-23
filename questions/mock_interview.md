# USTSV Mock Interview 1
#self intro
My name is Zack. I got my computer science master degree  from Pace University in New York. And I've been working as a software engineer for 8 years. In recent 2 years, I’m focusing on developing JavaScript full stack projects. I love programming.


#Makes me stand out
## very Productive and resposible
Once I worked in Unionman company as a software developer to develop software on TV set top box. I always work extra hours. I did so well  so I get promoted fast. In just 1 and half years, I became a tech lead.
Then I led a team of 6 people to accomplish a challenging project. We're in a very competative enviroment. There were more than a dozen companies competing with us. The customer’s software optimization requirements were  very demanding. We worked hard to satisfy the customer's needs. And finally we finished the project very successfully so that our company become the primary provider and get the 1 million units order.




##Collabrate well with team mates
IOT AT&T hackthon
Award : Social gold - Best collaborative team
Des:
Uber-like real-time location app to connect venues and musicians.

Res:
12 years old child, free lancer designer, product manager, developer, cs college student



#1 Describe recent project ---- employees list module in an auto office web app
4 pages
list 
    basic information name title contact information manager    drnum

detail
    sex 
    the date he/she start working 
    delete

click to see his/her
    manager infor

click
    direct report people

edit
    basic information, contact information
    change manager
    validation
    algorithm


#2 Describe another project ---- chat bot customer service for tax
Tax OneOnOne is a Nonprofit organization, wehelp customers to solve their tax related questions, like tax return
    when the customer open chat bot give instruction with links
    key word matching to respond 
    socket.io

#3 电商网站
jquery product list
php
css selector

#4 机顶盒
refactor
redesign

#Tech Q
React
    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.


Feature:
    declarative
    VDOM instead of DOM
    component-based composition
    
    
    component
        basic 
        
    state, prop
        state is an object which describe current component's data
        prop is an object, which is the configuration, value often passed by parent component
    
    method
         customized function describe the behavior
         
    lifecycle
        predefined hook functions. help develop to do something during the component load and render steps
        willMount -> render -> didMount -> willReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate -> componentWillUnmonut
        
Redux
    Redux is a predictable state container for JavaScript apps.
    
Feature
    One global store!

Three principles
    single source of truth
    
    State is read-only
    
    Changes are made with pure functions

    
    Flux
    
    
    
    Store
        state container
    
    Action
        js object to describe the change if state 
    
    Action creator diff
        Action creator is functions that create actions. For most of the case in React and Redux, we dispatch an action using the action creator:


        
    
    Reducer
        specify how the application's state changes in response to actions sent to the store.
        pure function
    
    
    middleware:
        lives between
    

##What is Middleware? 
 Middleware is code that intercepts a request or a process, usually redirecting it or producing some sort of side effect.
 
##What is middleware in Redux?
 
 In Redux, middleware is software that lives between the dispatching of actions and the reducers. Having middle ware means that we can intercept and modify dispatched actions before they even reach reducer or actually even run some sort of code when that dispatch happens. 

##common usage of Redux middleware
1. side effect   like redux-logger
2. handle with the action.  like sending http async request
3. redirect action to another middleware
4. run some codes before dispatching
5. dispatch extra actions


##What is thunk?
thunk is a redux middleware.
It's helpful when we handle with async request.
Manipulation in Redux store is synchronous. But we wanna do async request like async http request. 
First, we need to do a async request, then wait until we get the response. Then we do the manipulation in Redux store.
allow the the action creator to be high order function. 
  what is high order function

## Good part of thunk or Redux middleware?
abstraction or encapsulation
separate logical code away from view code

##How to use thunk to make async calls?
action creator to be high order


##why u use action creator not actions?
write less codes, no need to implicitly write the type.
better for using middleware thunk


axios
    

Asynchronous
    

Restful
    Representational State Transfer
    implemented by HTTP 1.1
    G P P D
    
    Get Post

MongoDB
    document based NoSQL database. 
    K-V instead of relational
    


MySQL






OOD:
    






Mock interview
introduce

current project


#HTML5
* DOCTYPE declaration
* New semantic elements
	* header, footer, article, section
* New attributes of form elements
	* number, date, time, calendar, range
* New graphic elements
	* svg, canvas
* New multimedia elements
	* audio, video


CSS3

* Css3 new Selectors
    * starting with val
    * ending with suffix val
    * containing the substring val
* Rounded Corner
* Border Image
* Box Shadow
* Text Shadow
* Gradient effect
* CSS3 RGBA: Color, with opacity
* Transform
* Multicolumn Layout
* Web Fonts   custom font




SPA
Single-Page Applications are Web apps that load a single HTML page and dynamically update that page as the user interacts with the app.
AJAX and HTML5 to create fluid and responsive Web apps, without constant page reloads.

React
JavaScript view library to build user interface.

why use React
* fast. VDOM
* component based. composition  split ui into component resuseable part
* easy to learn


Redux
a predictable state container for JavaScript apps.

why use Redux
One global store to manage states.
When the project becomes larger, you know, the state management can be very complex.  It's hard for our developers to figure out where state is stored or how state changes. 
Instead of storing the states in every single component, Redux uses only one global store to manage all the states. It is the single source of truth in which state is read-only and changes can only be made with pure functions to specify how the state tree is transformed by actions.
That helps us much more efficiently manipulate with all the states.



action vs action creator
* Actions are JS object, they are kind of payloads of information that send data from application to store. (acts like a factory that creates an action.)

* Action creator is functions that create actions. 

why use action creator
* Basic abstraction: Rather than writing action type strings in every component that needs to create the same type of action, put the logic for creating that action in one place
* Documentation: The parameters of the function act as a guide for what data is needed to go into the action
* Code separation: Consistently using action creators means that a component doesn't have to know any of the details of creating and dispatching the action.

JS data type?
primitive type:
boolean, number, string, null, undefined, symbol (ES6)

other:
object, array, function, map, set, 

what is NaN?
NaN is a property of the global object.


Closure


hoisting


current scope





1. 背出来，实际经验
2. Employees, different project  功能 human resource  phone interview 不能拼命说 要停顿
3. 不能repeat，
4. 重新准备一遍。


architecture



how many components in page



how to connect React and Redux


答得不好的地方
project
怎么说?
联系Dave


closure
怎么描述


this
怎么描述


promise
    The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. 3 states 



es5 declare class?
怎么描述


what is thunk? why u use thunk?


