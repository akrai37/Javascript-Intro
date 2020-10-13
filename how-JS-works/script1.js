
//**** Hoisting***********

/*Variable Object explanation with example:-

Imagine we have this function

function test(param1) {

    var a = 'Hello';
    var b = 'Hi';

}

test('Good morning')
When we call this function, the new execution context is created and put on the top of the stack. During the creation phase, the variable object is created and associated with this execution context.

IP- The 'variable object' contains all the parameters and variables, as well as the references to functions declared inside of the function.
In this case, the test() function has one parameter and two local variables. The 'variable object' for the execution context of the test() function would look like

var variableObject = {
        arguments: {
            0: "Good morning",
            length: 1
        },
        param1: "Good morning",
        a: "Hello",
        b: "Hi"
}
*/

/* code-

//functions
calage(1989);
//below is function declaration. Hoisting only works for function declaration and not for function expression.
function calage(year){
  console.log(2020-year);
}

retirement(1989);
//below is function expression.
var retirement = function(year){
   console.log(65-(2020 - year));
}

//Variables
console.log(age); undefined (because it is nto declared till now).
var age=23;

function foo(){
  console.log(age); undefined(because it is nto declared till now).
  var age=45; //the 'age' variable here is totally differnt than the previously defined one. cont.
  console.log(age);  //It is a local variable of function 'foo' stored in the variableObject of execution object created for the function 'foo'.
}

foo();
console.log(age);
*/


/*
//*************Scoping************************
//ex. of scoping
var a='you';
first();

function first(){
  var b='look';
  second();

    function second(){
      var c='good';
      console.log(a+b+c);
   }
}
//note:- in the rule of scoping,the local function can access all the global variables as well as its own variable but cannot access variables of another function.
//here,The second(() function would have access to global variables and any variables defined within the first()  as well as the function itself.
//learn more about scoping and execution context
*/


/*
//****************the 'this' keyword***************************
console.log(this); //this will refer to the 'window' object.

calculateAge(1994);
function calculateAge(year){
  console.log(2020-year);
  console.log(this); //here also,'this' will refer to the 'window' object.

}

var john={
    name:'John Smith',
    yearofbirth:1991,
    calculateAge:function(){
          console.log(this);//'this' will refer to the 'john' object because it is defined inside the john object.
          console.log(2020- this.yearofbirth);
          function innerfunction(){
            console.log(this);// typically, 'this' here should refer to the john but it is referring to the global object which is 'window'.cont.
          }                   //Even though it is a function defined inside one of the functions of 'john', it is a proper function defined and called and thats why ,'this' is referring to the 'window' object. Controversial.
          innerfunction();
    }
}
john.calculateAge();

var mike={
  name:'mike dwane',
  yearofbirth:1981
  }
mike.calculateAge=john.calculateAge; //It is not necessary to define the same function inside another function if it is already defined. We can make that function to be part of the current object like this.cont.
//Note that here, the function is treated as a variable and thats why we dont have any parenthesis. Object variables(here name, age) will be overwritten if they are defined in the current object.

mike.calculateAge();
*/
