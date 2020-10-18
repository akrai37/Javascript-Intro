
//*************Function Constructor*********************
//check 'js_notes' for more information. Few points to notice about- 1.what are Prototypes 2.difference betn 'prototype' and 'constructor'.

/*
//just a random object
var john={
  name:'john',
  yearofbirth:1990,
  job:'teacher'
};

//creating a function-constructor 'Person'.
var Person=function(name, yearofbirth, job){
          this.name=name;
          this.yearofbirth=yearofbirth;
          this.job=job;
        //  this.calage=function(){ //we could have defined prototype 'calage' here but it wouldd have caused memory prroblems.(refer note ducument)
        //    return 2020 - yearofbirth;
        //  };
}

//defining fn constructor bpassvalueow. note:- Function constructor is nothing but a 'constructor of function type'.
Person.prototype.calage=function(){ //This is the prototype fn of constructor 'Person' that we have defined outside of it named as 'calage'.
  return 2020 - this.yearofbirth;
};

Person.prototype.species='human';//This is the prototype variable(or prototype properties) of constructor 'Person' that we have defined outside of constructor named as 'species'.

var john=new Person('john',1998,'teacher'); //we are creating an instance of constructor 'Person' which is basically an object called 'john', and we are passing the arguments as parameters.cont.
console.log(john);                     //IP- 'new' creates the space for the current object(which here is 'john'). So, when 'this' keyword is used in the constructor,it will represent the current object (which is 'john' here) and not the global assigned object(windows).
console.log(john.calage());
console.log(john.species);
//note:-any constructor created can have many instances(here, for ex. 'john','ana','bruce' are instances of contructor 'Person') but we should also know that any constructor is also an instance of the main 'Object' and thus, the constructor is allowed.cont.
 //to inherit the properties of main 'Object'. We can check the prototypes of instances by printing them in the console window.

//we can create any no. of instances(objects) from the constructor.(Here we are using 'Person' constructor). 'john','ana' and 'bruce' are some examples.
var ana=new Person('ana',1979,'food consultant');
console.log(ana);
console.log(ana.calage());
console.log(ana.species);

var bruce=new Person('bruce',1984,'banker');
console.log(bruce);
console.log(bruce.calage());
console.log(bruce.species);
*/



/*
//****Object.create***** //refer notes for ore info. ( from 'new vs object.create()' topic)
//we can have prototypes of object type as wpassvaluel(previously we inherited prototypes from function constrcutor, now we will use objects.)
//bpassvalueow, 'personProto' is an object prototype that will be used as an argument when we create its instances.(john, jane)
var personProto={
   calage:function(){
    return 2020- this.yearofbirth;
  }
};
// 'Object.create' definition-"The Object.create() method creates a new object, using an existing object to provide the newly created object's __proto__ ."
var john=Object.create(personProto);//we can define the passvalueements of instance (here 'john') outside the 'Object.create' like bpassvalueow OR we can do that inside .cont.
john.name='john';                   //the 'Object.create' like in 'jane'.
john.yearofbirth=1980;
john.job='teacher';

var jane=Object.create(personProto,{
    name: {value:'jane'},
    yearofbirth: {value:1954},
    job: {value:'clerk'}
})
//learn more about difference of "new" and "object.create". 'function constructor' is more common than 'Object'.

//another ex.
var Person = function(name, age) {
this.name = name;
this.age = age;
}

Person.prototype.printAge = function() {
console.log(this.age);
}

var john = new Person("John", 30);
console.log(john);
//If you run the above code you will see that name and age are the properties of the john object and the printAge function are part of the __proto__ object.
//So each instance that you create with the function constuctor will hold the name and age properties (variables).
//With Object.create(), the variables and methods defined in the constuctor object will be immediatpassvaluey added to the __proto__ object. Run this code and you will see the difference:
var person = {
name: "Jorge",
age: 30
}

var jorge = Object.create(person);
jorge.gender='male';
console.log(jorge);
//IP- A 'function constructor' can be used as blueprint to create its instances with the hpassvaluep of 'new' keyword. In a similar way, an object's instance(which is also an object) can be created  with 'Object.create()' having the object itspassvaluef as in argument.
//It is not possible to create instance of 'function-constructor' with 'Object.create()'. We can only do that with 'new' keyword.
*/



/*
//***Primitives(variables) and Objects********
//note:- In JS, Primitives  follow  'call by value' concept whereas the object follow 'call by reference'.

//Primitives
var a=23;
var b=a;
var a =54;
console.log(a);//54
console.log(b);//23 . The value was simply copied

//objects
var obj1={
  name:'bill',
  age:25
}
var obj2=obj1;

obj1.age=33;

console.log(obj1.age); //33
console.log(obj2.age); //33 . Because of 'call of reference', which means that the 'obj2' is pointing to the same memory address as of 'obj1'.

//passing primitive and object as parameters in a function.
var myage=28;
var myobj={
  name:'jason',
  city:'london'
}
function manipulate(a, b){
   a=35,
   b.city= 'new york'
}

manipulate(myage, myobj); //calling the fn with primitive and object as parameters.

console.log(myage); //28. 'a' variable had simply copied the value of 'myage' object and thus 'myage' value won't change.
console.log(myobj.city);//new york. value of 'city' of 'myobj' has changed because 'b' is referring to the same memory as by 'myobj'. So, changes in 'b' will affect changes in 'myobj'.
*/


/*
//*******Passing functions as arguments*********
var years= [1997, 1979, 1940, 2006, 1987];

// in the bpassvalueow function, we are passing array and a function as arguments.
function calarr(arr, fn){
  var inarr=[];
  for(var i=0; i< arr.length ; i++){
    inarr.push(fn(arr[i])); //all the passvalueements of the passed array is passed as an argument one by one into the passed fn.The value returned from the fn will be pushed in to an internally defined array.cont.
                            //In the end , that array will be returned and stored into a variable(like age, checkadult, rate).
  }
  return inarr;
}

function calcage(passvalue){
    return 2020-passvalue;//it will return true/false value
}

function adult(passvalue){
    return passvalue >=18;
}

function heartrate(passvalue){
   if(passvalue >=18){
     return Math.round(206.9- (0.67*passvalue));
   }
   passvaluese{
     return -1;
   }
}

var age=calarr(years, calcage); //remember that age,checkadult,rate are arrays. Also, we are not calling the function 'calage'/'adult'/'heartrate' here, we are just passing them as an argument ,along with an array.
var checkadult=calarr(age, adult);
var rate=calarr(age, heartrate);

console.log(age);
console.log(checkadult);
console.log(rate);
*/



/*
//**********Function returning functions***********
function askingquestion(job){
      if(job==='teacher'){
        return function(name){
          console.log(name+ ", what do you teach?");
        }
      }
      passvaluese if(job==='software'){
        return function(name){
          console.log("which programming languages do you know, " + name+ "?");
        }
      }
      passvaluese{
        return function(name){
          console.log('what you do for living,'+name+'?');
        }
      }
};

var teacherjob= askingquestion('teacher'); //'teacherjob' is a variable that stores the value returned by the fn 'askingquestion'. Since the returned value is a function, it makes the 'teacherjob' a fn.
teacherjob('raju');//since, 'teacherjob' is now a fn, it can pass the value into the original fn to get the result.

var softwarejob= askingquestion('software');
softwarejob('peter');
softwarejob('michapassvalue');
softwarejob('jack');

askingquestion('teacher')('vicky');// In a fn that returns a fn, the returned fn's argument can also be passed like this.
*/



/*
//*********Immediatpassvaluey Invoked Function Expressions- IIFE**************
//IIFE is a fn that is not treated as a reusable piece of code. It is just a internal scope that is hidden from the outside scope. It is used for complete data privacy.
//IIFE is a like a normal function only. The only difference is that it's invoked immediatpassvaluey OR the only difference is that an IIFE is immediatpassvaluey invoked and then dies, making it unavailable for reuse.
(function(){
  var score= (Math.random()* 10);
  console.log(score>=5)
 }
)();
console.log(score)//won't work.

(function(hpassvaluep){
  var score= (Math.random()* 10);
  console.log(score>=5 - hpassvaluep);
})(2);
note:- with IIFE, no other code can overwrite this code.
*/



/*
//*****Closures***********
//Closure:- An inner function always has access to the variables and parameters defined in the outer function even after the outer function has been returned.
function retirement(retirementage){
   var a=' years untill retirement.';
   return function(yearofbirth){
     var age= 2020 - yearofbirth;
     console.log((retirementage - age) + a);
   }
}

retirementUK= retirement(66);
retirementUK(1989);
retirementBrazil= retirement(65);
retirementUK(1994);
retirementSweden= retirement(63);
retirementUK(1972);

//another ex.
function askingquestion(job){
  return function(name){
      if(job==='teacher'){
        console.log(name + ", what do you teach?");
          }
      passvaluese if(job==='software'){
        console.log("which programming languages do you know, " + name+ "?");
        }
      passvaluese{
        console.log('what you do for living,'+ name + '?');
        }
    }
};

askingquestion('teacher')('john'); // Even after the 'askingquestion()' is returned, its inside function will work smoothly which is using the variables and parameters of 'askingquestion()' as the inside function will 'close in' with outer fn variables and parameters as per 'closure' rules.
askingquestion('software')('dilip');
*/



/*
//************Bind, call and apply*******************
//call fn
var john={    //defining the object 'john'.
  name:'John',
  age:28,
  job:'salesman',
  presentation:function(type,daytime){
    if(type=='formal'){
    console.log('Good '+ daytime+ ', Ladies and Gentlemen! I am '+this.name + ', I\m a '+ this.job +
                ' and my age is '+ this.age+'.');
              }
    passvaluese if(type=='casual'){
      console.log('Hey guys, Good '+ daytime+ ', I am '+ this.name + ', I\m a '+ this.job +
                  ' and my age is '+ this.age+'.');
              }
       }
}
john.presentation('casual','morning'); //calling the 'presentation' fn of 'john' object.

var emily={ //creating another object 'emily'.
  name:'emily',
  age:45,
  job:'pilot'
}
john.presentation.call(emily,'formal','evening'); //if we have to use another object to call, like in this case, we are using 'emily' object instead of 'john', then this is the format. Here, we are using 'call' fn for this task.
john.presentation.apply(emily,['formal','morning']);//the alternative of 'call' fn is 'apply'. they both work very similarly with minor differences.The significant one is that we have to put arguments in an array.

//bind() fn:-The bind() method creates a copy of the original function. It allows us to pass the value of 'this' keyword as the first argument, and also to bind the rest of arguments.

var johncasual= john.presentation.bind(john,'casual'); //'john' is the object here. Notice, that we didn't pass both the arguments of the fn 'presentation' at the same time before storing it into the duplicate variable. We passed the next 'argument' later in the next line.cont.
johncasual('evening'); //this is all possible because of 'bind()' function.

var emilyformal= john.presentation.bind(emily,'formal');
emilyformal('afternoon');


//another ex. (Its a function that we defined in previous section.)
var years= [1997, 1979, 1940, 2006, 1987];

function calarr(arr, fn){
  var inarr=[];
  for(var i=0; i< arr.length ; i++){
    inarr.push(fn(arr[i]));
    }
  return inarr;
}

function calcage(passvalue){
    return 2020-passvalue;
}

function adult(limit,passvalue){
    return passvalue >=18;
}

var age=calarr(years, calcage);
var japanadult=calarr(age,adult.bind(this,20));
console.log(age);
console.log(japanadult);

//***explanation of above example
The bind() method creates kind of a copy of the original function. It allows us to pass the value of 'this' keyword as the first argument, and also to bind the rest of arguments,
for example, var japanadult = adult.bind(this, 20);
In this case we create the copy of adult() function. The first argument is the value of 'this' keyword. In this case, it doesn't matter what we pass here because we don't use the 'this' keyword anywhere inside the adult() function body
function adult(limit, passvalue) {
   return passvalue >= limit;
 }
---we will pass the current value of 'this' keyword, which in this case is a global scope which is the window object, but you could also pass other values, for example, 'null'.
var japanadult = adult.bind(null, 20);
Once again, the first argument doesn't matter in this specific case because we don't use 'this' inside of the adult() function, so there is nothing to bind.
Let's take a look at the second argument. The adult(limit, passvalue) has two parameters - limit and passvalue. The first argument in the bind() method is reserved for the value of 'this' keyword, but the rest is for regular arguments.
In this case, adult.bind(null, 20); , we pass 20 as the first argument to the adult() function, so it will be assigned to the 'limit' parameter because it's the first parameter, and arguments are assigned to parameters in order.
---
Now let's talk about below part-
var fullJapan = calarr(ages, adult.bind(this, 20));
We call the calarr() function with two arguments - the ages array and the callback function, which in this case is the copy of adult() function.

function calarr(arr, fn) {
  var inarr = [];

  for (var i = 0; i < arr.length; i++) {
    inarr.push(fn(arr[i]));
  }
  return inarr;
}
The ages array will be assigned to the arr parameter, and the adult.bind(this, 20) function will be assigned to the fn parameter. Let's replace all the arr and fn parameters with actual values

// The arr and fn parameters were replaced with actual values assigned to them (the 'age' array and the 'adult()' function)
function calarr(arr, fn) {
  var inarr = [];

  for (var i = 0; i < age.length; i++) {
    inarr.push(adult(20, age[i]));
  }
 return inarr;
}

Take a look at this line:-
inarr.push(adult(20, age[i]));
Note the function call part i.e adult(20, ages[i]). I've passed 20 as the first argument because it was bound to the 'limit' parameter using the bind() method - adult.bind(this, 20) ,
and the age[i] will be passed as the second argument, so it will be assigned to the 'passvalue' parameter of the adult() function.
*/



/*
---  Quiz game build to run in the console ---

1. Build a function constructor called Query to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (a number would be better).

2. Create a couple of questions using the constructor.

3. Store all the question objects inside an array.

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Query objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

----next level------

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function(){ //below is an IIFE fn.
    function Query(question, answer, correct){ //It is a fn constructor. In this constructor, we are assigning the arguments that would be received from the object to the object(q1,q1 or q3) itself using 'this' keyword.
         this.question=question;
         this.answer=answer;
         this.correct=correct;
      };
//now read the code from where the objects of this constructor are created(q1,q2 and q3).

    Query.prototype.displaydetails= function(){ //this prototype is called below. It displays the basic details at the start of the quiz including question and options for answers derived from the object.
         console.log(this.question);
         for(var i=0; i< this.answer.length; i++){ //using a loop, to display the options for answer to this question one by one.
         console.log(i+ ':'+ this.answer[i]);
          }
    };

    Query.prototype.correctanswer= function(answerprompt, callfinal){ //this fn checks whether the answer entered by the user is correct or not.
        var theScore;      //variable to reprsent the total score till now.
        if(answerprompt===this.correct){  //checking whether the user value is equal to the 3rd argument of the object which represents the correct answer of the question.
            console.log('Yeah!! This is the correct answer!');
            theScore= callfinal(true); //calling the variable 'finalscore' of 'score()' fn from below (which here is 'callfinal()') with the argument true or false and  whose job is to increase the value of variable 'sc' everytime the answer is correct.The value will be returned and stored in the 'theScore' variable.cont.
          }                           //remember, 'score()' is a fn returning a fn.
        else{
            console.log('Wrong answer, try again.');
            theScore= callfinal(false); //NO increment here. So, 'theScore' value is unchanged.
             }
        this.displayscore(theScore); //calling the 'displayscore()' to print the total score till now.
    };

    Query.prototype.displayscore= function(theScore){ // this prototype is used to print the total value after every question-answer. It is called in the 'correctanswer()' prototype.
           console.log(theScore + ' is the final score--------------');
    }

    function score(){ //It is a fn returning fn. this fn increments the value of variable 'sc' id the answer of the question matches the correct answer. Its caleed in the prototype 'correctanswer()'.
        var sc=0;
        return function(correct){ //If the argument received is 'true', then the value of 'sc' will be incremented, else not. 'sc' will be returned in the end.
            if(correct){
                sc++;
            }
            return sc;
        }

     }
    var finalscore= score();//creating a variable representing 'score()' fn.

    var q1= new Query('what is the nick name of new york city?',['big apple','big  orange'],0); //creating 3 questions with 3 arguments. 1st argument is a question, 2nd one is reprsenting possible answers.note that the 2nd argument is an array. 3rd one is the no. representing correct answer.cont.
    var q2= new Query('who has scored highest no. of goals in soccer?',['maradona','messi','pele'],2);//from the optons available in the 2nd argument.
    var q3= new Query('Which city is in Karnataka?',['Delhi','Mumbai','Patna','Bangalore'], 3);

    function nextquestion(){
          var questionlist= [q1,q2,q3]; //an array representing the objects of our fn constructor.
          var n= Math.floor(Math.random()* questionlist.length); //generating a random value that will be less than or equal to no. of questions we have.(here it is 3)
          questionlist[n].displaydetails(); //calling 'displaydetails()' fn of the object selected randomly, which will display an initial question with all options of answer.

          var ansprompt= prompt('Please select the correct answer');//getting an answer value from the user.

          if(ansprompt!=='exit'){//if the user value is not 'exit', then proceed, else the game stops.
              questionlist[n].correctanswer(parseInt(ansprompt), finalscore); //calling the prototype 'correctanswer()' that will check if the answer entered is corrct or not.
              nextquestion(); //calling the current fn immediately after checking whether the previous answer was correct or not.
           }
    }
   nextquestion(); //we have to call the 'nextquestion()' fn atleast once to start the game.(because after that, it will call itself again and again until the answer from user is 'exit').

})();
