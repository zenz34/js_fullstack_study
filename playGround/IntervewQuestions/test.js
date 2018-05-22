var y = 1;
var b = {};

//  it is treated as truethy
if (function f() {}) {
    y += typeof f;
}
console.log(y);

/*
how to import modules
1. import module
    import React from "./react-dom"
2. import part of it. like objects, functions
    import {Component} from "./react-dom"
3. import * as Amodule from "./xxmodule"

how to export modules
export default function
export default object


export class component


__proto__

arrow function


1.features in ES6

2.how to import modules

3.closure

4.generators and write one to add the sum of several numbers

5.event bubbling

6.prototype __proto




7.arrow function

No this, no arguments

---------------------------------------------
features in es6.

closure.

event bubbling and event capture.

inheritence in js.

default object properties.

what is spread operator.

whats the use of typeof operator

whats the scope of a variable

_prototype.

how to check if array


coding questions... i remember only the below.
sum of n numbers in js

fibbonaci -- recursive

method overloading shapes, circle , rectangle

merge an array to the 5th position of another array.

maximum repeating alphabet in a sentence.




What is clean code?

What is SOLID principles?

What is singleton?

What is the wireframe of your last project?

How do you implement of the back end? Front end and back end Using different server ?

How do you write your code? All js code in one file or?

Sql( mongodb)

Giving a table of employees, how to display all?

How to select bonus greater than 1000?

How to deal with duplicate(same name)?

Js
Error: undefined vs not defined? null?

== vs ===

closure

bind apply call

‘use strict’

angular
what is factory, service
what is directives?
How do you use route?
What is promise?
How to deal with nesting callbacks?
What is controller?

1.  how can u control event propagation. Say if u click a button, how does the event propagate? which direction? how can u reverse the direction?

2. What are the ways for clearing floats?
3. how to do multi threads for ur front end coding?
4. Have you ever created a print stylesheet for a website?
5.if u are coding a design that used non-standard web fonts, how would you approach it?
6. When u found a rendering problem on one of your sites in IE 9, which u have decided u are supporting. How would u fix it?
7. how can u attach a link in html with js function without use any js framework?
8. when u click that link it will load a new page; but u don't want to load, how can u stop it?




*/
