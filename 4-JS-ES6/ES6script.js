
////////////////////////////////////////
//Let and const    Note:-'Let' and 'const' follow block scope rules whereas 'var' follows function scope. It means 'let' and 'scope' are limited to a block(maybe an if statment or a loop etc. just within {} parenthesis) but var has fn scope so, an element can be used anywhere in the fn.
/*
var nameES5='camila stokes';
var ageES5=23;
nameES5='camila paurfau';
console.log(nameES5);

const nameES6='James Hernandez';
let ageES6=41;
nameES6='James Rodri';
console.log(nameES6);


//ES5
function license5(passed){
    if(passed){
      var firstname='James';
      var birthyear=1987;
    }
    console.log(firstname + ' was born in '+ birthyear + ' and can drive now.');
};
license5(true);

 //ES6 
function license6(passed){
    if(passed){
      let firstname='Karim';
      const birthyear=1992;
    }
    console.log(firstname + ' was born in '+ birthyear + ' and can drive now.'); //wont work because the elements used here('firstname' and 'lastname') are declared and defined in the block. They are limited to 'if' statement.
};
license6(true);

//ES6
function license6(passed){
  let firstname;
  const birthyear=1992;
    if(passed){
      firstname='Karim';
    }
    console.log(firstname + ' was born in '+ birthyear + ' and can drive now.'); //It will work because the elements used here are declared outside the 'if' statement. But keep in mind that the 'const' value has to be both defined and declared outside the 'if' (block scope) to use it in console.cont.
};                                                                               //'let' can be declared outside and defined inside the block scope but 'const' has to be both declared and defined outside the block scope if we intend to use it outside the block scope.
license6(true);

//ES5
var i=30;

for(var i=0;i<5;i++){
  console.log(i);
};
console.log(i); //value of 'i' would be the last value of loop and NOT 30 because the i was declalred with 'var' which puts it in fn scope. So, it is not limited to a loop and if its value is changed, it will change globally.

//ES6
let j=16;
for(let j=0;j<5;j++){
  console.log(j);
};
console.log(j); //'j' will show 16 as its value and not the last value of loop because the 'j' present in the loop is totally different than the one present outside as it is limited to the loop only.
//Note:-Its better to use let/const because they are block level scoped. In JS a block is everything between the { }. This means you can reuse variable names throughout your code without worry about overriding a value that was previously set.
*/



/*
//////////////////////////////////////////////
//Blocks and IIFE:-     Some similarities in between them.

//ES5
(function(){
  var a=1;
})();
console.log(a); //won't work because 'a' is defined inside an IIFE fn.

//ES6
{
  let b=10;
  const c=34;
  var p=90;
}
console.log(b+c); //won't work because 'b' and 'c' are block scope variables.
console.log(p); //will print the value of 'p' because 'p' isa fn scope variable and is restricted to a fn only.
*/



/*
/////////////////////////////////////////////////////
//Strings

let firstname='john';
let lastname='wayne';
const birthyear=1989;

function curage(curyear){
    return 2020-birthyear;
};

//ES5
console.log('This is '+ firstname +' '+ lastname + '. He was born in ' + birthyear + ' and is '+
            curage(birthyear) + ' years old.');

//ES6
console.log(`This is ${firstname}${lastname}. He was born in
           ${birthyear} and is ${curage(birthyear)} years old.`); //We can print strings like this in our ES6 using ``. It removes the usage of '+'.

const name= `${firstname} ${lastname}`;
console.log(name);
console.log(name.startsWith('j'));// gives a true/false value depending upon the starting character of the object.
console.log(name.startsWith('J'));
console.log(name.endsWith('th'));//gives a true/false value depending upon the ending character of the object.
console.log(name.endsWith('ne'));
console.log(name.includes(' '));//gives a true/false value depending if the character is present in between the object.
console.log(name.includes('.'));

console.log(`${firstname} `.repeat(5)); //repeats the value no. of times.
*/



/*
/////////////////////////////////////////////////////////////
//Array functions
const brthyears= [1999, 1984, 1996, 1968, 1981];  //array containing the birthyears.

//ES5
var curAge5= brthyears.map(function(curEl){   //This is ES5 way of using a 'map' method. We would need a 'callback' fn and 'return' statement.
     return 2020 - curEl;
});
console.log(curAge5);

//ES6-one way ------------  Only having one argument i.e current element of the base array.
let curAge6= brthyears.map(curEl=>2020- curEl); //With ES6, we don't need a 'callback' fn and don't need to use 'return' statement for executing single line of code or single expression.
console.log(curAge6);

//ES6-2nd way -------------  This way is used when we have two arguments i.e current element as well as current index of the current elment in our  base array.
curAge6= brthyears.map((curEl, curIndex)=> `age index-${curIndex}: ${2020- curEl} `);
console.log(curAge6);

//ES6-3rd way  ------------- We would need a 'return' statment and the {} parenthesis if we have more than one line of code/expression to execute.
curAge6=brthyears.map((curEl, curIndex)=>{
     const curYear= new Date().getFullYear();
     const age= curYear-curEl;
     return `age index-${curIndex}: ${age} `;
})
console.log(curAge6);
*/



/*
////////////////////////////////////////////////////////
//Destructuring:-we can name each and every element of a structure(array, object etc)while calling them.

//ES5
var john=['john', 26];
var name=john[0];
var age=john[1];
console.log(name);
console.log(age);

//ES6
const [name,age]=['miley','jones'];
console.log(name);
console.log(age);

const anyobj={
  firstname:'peter',
  age:30
};
const {firstname, age}= anyobj;
console.log(firstname);
console.log(age);

const {firstname:a, age:b}=anyobj;
console.log(a);
console.log(b);

function calcRetire(year){
   const age= new Date().getFullYear()- year;
   return [age, 65-age];
};

//ES5 style
let d=calcRetire(1998);
console.log(d);

//ES6 style
const [age,retirementleft]= calcRetire(1986);
console.log(age);
console.log(retirementleft);

--->You can skip elements using a comma, for example,
const arr = [1, 2, 3, 4, 5];
const [first, second,,fourth, fifth] = [...arr];

console.log(first, second, fourth, fifth);
*/



/*
//////////////////////////////////////////////////////
//Arrays
const boxclasses= document.querySelectorAll('.box'); //selecting all the classes having '.box'

//ES5
var arraybox5= Array.prototype.slice.call(boxclasses); //making the nodeList into an array in ES5
arraybox5.forEach(function(curr){
    curr.style.backgroundColor='dodgerblue';
});

//ES6
const arraybox6= Array.from(boxclasses); //making the nodeList into an array in ES6
arraybox6.forEach(curr=> curr.style.backgroundColor='dodgerblue'); //handy way of using 'forEach' in the ES6.

//ES5       continue/break statement
for(var i=0; i< arraybox6.length; i++){     //using a typical 'for' loop.
    if(arraybox6[i].className==='box blue'){ //'className' is a pre-defined fn to find the name or text of the class present in the source array.
      continue;
    }
    arraybox6[i].textContent= 'I have changed';
};

//ES6--1method    continue/break statement
for(const curr of arraybox6){             //using 'for-of' loop which is the new loop in ES6.
    if(curr.className==='box blue'){
        continue;
    }
    curr.textContent= 'I have changed ,yes';
}

//ES6--2method
for(const curr of arraybox6){
    if(curr.className.includes('blue')){  //'includes' search for the 'text' written as an argument.
        continue;
    }
    curr.textContent= 'I have changed ,yes';
}

//inserting the elements after some modification and finding the index as well as the element of that index.
var ages=[14, 9, 24, 16, 6, 13]; //array containing ages of children and adult.

//ES5
var adult= ages.map(function(currentE){ //using a common 'map' fn to insert true/false value into our new array.
      return currentE >=18;
});
console.log(adult);
console.log(adult.indexOf(true));
console.log(ages[adult.indexOf(true)]);

//ES6
console.log(ages.findIndex(curr=>curr >= 18));//we can use 'findIndex()' to find the index of an element and 'find()' to find the element. But the problem with thee methods is- the fn breaks when even a single element satisfies the condition BUT we need all elements.Thats why, we can use 'filter'
console.log(ages.find(curr=>curr >= 18));
//We can use 'filter' as well. It will return all the values that satisfy the conditions.
const adultb = ages.filter(curr=> curr>=18);
console.log(adultb);
*/



/*
//////////////////////////////////////////////////////
//Spread operator(...)

//Example-1
function summation(a, b, c, d){ //We have a function that takes 4 number values as arguments.
  return a + b + c + d;
};
var sum1= summation(12,45,78,55); //common way to pass arguments.
console.log(sum1);

//ES5
numbers=[12,45,78,55];
var sum2= summation.apply(null, numbers); //using 'apply' method to pass the array as argument.
console.log(sum2);

//ES6
const sum3=summation(...numbers); //'spread' operator to pass the whole array as an argument
console.log(sum3);

//example-2 Spread operator
const familykapoor=['ranbir','mohit','mukesh','neeta'];
const familykumar=['santosh','raveena','Jai','aayush'];
const completeFamily= [...familykapoor,'bhavana',...familykumar]; //we can literally join 2 arrays like this with 'spread' and can also add elements in between.
console.log(completeFamily);

//example-3 Spread operator
const h= document.querySelector('h1');
const classboxes= document.querySelectorAll('.box');
const allvalues=[h,...classboxes];

Array.from(allvalues).forEach(curr=> curr.style.color='purple');
//note:-if we can use spread operator to convert node list to array like this - var myArray = [...nodeList];
*/



/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//'Rest' parameters- similar to 'Spread' operator
.
//note:-The 'arguments' is an Array-like object accessible inside functions that contain the values of the arguments passed to that function.They will catch the arguments inside the fn even if there is no argument variable to hold the passing values when we call the fn.cont.
//In other words, if you pass any arguments to a function, these arguments are accessible through the arguments array-like object (Array-like means that object behaves like an array - has the length property and the elements are indexed from 0, but it doesn't inherit methods from the Array.prototype, like the forEach() method).

//ES5-a
function fullage5(){ //There is no variable to hold the argument that would be passed when we call the function BUT it doesn't matter because we have used 'arguments' keyword.
   console.log(arguments);
   var argArray=Array.prototype.slice.call(arguments);
   argArray.forEach(function(curr){
      return console.log(2020-curr >18);
   });
};
//fullage5(1990, 2016, 1976, 2000, 2005);

//ES5-b
function fullage5(limit){
   console.log(limit);
   console.log(arguments);
   var argArray=Array.prototype.slice.call(arguments,1); //will store all the passed values starting from index 1.
   argArray.forEach(function(curr){
      return console.log(2020-curr >limit);
   });
};
fullage5(21, 1999, 2016, 1976, 2000, 2005);

//ES6-a
function fullage6(...years){ //unlike ES5, all the passed values will be converted into an array with this way of writing the argument, this is REST parameters.
   years.forEach(cur=>console.log(2020-cur > 18));
};

//fullage6(2018,1992,1981,2011);

//ES6-b
function fullage6(limit, ...years){ //1st value will be the 'limit' value and then, all the other values will be stored in 'years' as array values.
   years.forEach(cur=>console.log(2020- cur >limit));
};

fullage6(21,2018,1992,1981,2011);
*/



/*
/////////////////////////////////////////////////////////////////////////////////////////////
//Default parameters

//ES5
function jonesfamily(firstname,yearOfBirth,lastname,nationality){

       lastname===undefined ? lastname='jones':lastname=lastname;
       nationality===undefined ? nationality='global':nationality=lastname;

       this.firstname=firstname;
       this.yearOfBirth=yearOfBirth;
       this.lastname=lastname;
       this.nationality=nationality;;
};

//var peter=new jonesfamily('Peter',1998);
//var jesica=new jonesfamily('Jesica',1982,'Silva', 'Spanish');

//ES6
function jonesfamily(firstname,yearOfBirth,lastname='jones',nationality='global'){ //we can assign the default values along with the arguments. So, if there is no value passed, these default values will be assigned. This was not possible in ES5 version.

       this.firstname=firstname;
       this.yearOfBirth=yearOfBirth;
       this.lastname=lastname;
       this.nationality=nationality;;
};

var peter=new jonesfamily('Peter',1998);
var jesica=new jonesfamily('Jesica',1982,'Silva', 'Spanish');
*/



/*
///////////////////////////////////////////////////////////////////////////////////
//Maps
//Advantages of Map:- 1.Any value can be used for key(int,string etc)    2.It is iterable.       3.We can get the size of the Map using 'size' keyword.

//Below, we have created a quiz with one question and 4 options amongst which 1 is the correct option.
const question=new Map();
question.set('Mainquestion','Which city has Taj Mahal ?'); //'.set' takes 2 values:- A 'key' and the 'value' associated with the key.
question.set(1,'Jamshedpur');
question.set(2,'Agra');
question.set(3,'Guwahati');
question.set(4,'Kolkata');
question.set('correct', 2);
question.set(true,'This is the correct answer :D');
question.set(false,'Wrong answer, try again!!');

console.log(question.get('Mainquestion')); //'.get' retrieves the value associated with the key. So, here the return value is 'Which city has Taj Mahal?'.
console.log(question.size);  //finds the no. of total '.set' values used.

question.delete(3);

if(question.has(4)){  //can find out if certain 'key' is present in the map.
     console.log(`answer 4  is here`);
};

question.clear();

question.forEach((value,key)=>console.log(`This is ${key} and is set to the value ${value}`));  //Why 'key' is second argument and 'value' first?In a 'for each' loop we have 'value of the current position' as a first parameter and as a second parameter we have the 'index'.So if we think about the 'for each' loop applied on the map we have 'value' as a first parameter (from key : value pair ) and a 'key' as a second parameter.cont.
                                                                                                 //Here, in case of map you can consider the 'key' as a 'index'  and we are finding the value associated with that particular 'index'(key).

for(let [key,value] of question.entries()){ //we could have also written simply 'question'. But for being more accurate, we wrote 'question.entries()'.
   if(typeof(key)==='number'){
     console.log(`${key}:${value}`);
   };
};

var rightAns= parseInt(prompt('Write the correct answer'));
console.log(question.get((rightAns===question.get('correct'))));
*/



/*
////////////////////////////////////////////////////////////////////////////////////////
//class:-  It us an alternative of object or object constructor in JS. With classes, we don't need to use '.prototype' to define an external fn, we can define them inside the class only. JS class is very similar to any other class of an OOP language.

//ES5
var Person5= function(name, yearofbirth=1980, job){
      this.name= name,
      this.yearofbirth=yearofbirth,
      this.job=job
}
Person5.prototype.calcAge= function(){
  var age=2020-this.yearofbirth;
  console.log(age);
}

var john=new Person5('john',1992, 'SDE');
john.calcAge();

//ES6
class Person6{

  constructor(name, yearofbirth=1980, job){
      this.name=name;
      this.yearofbirth=yearofbirth;
      this.job=job;
  }

  calcAge(){
      var age=2020- this.yearofbirth;
      console.log(age);
  }

  static testing(){  //'static' is a method of constructor only and not its objects. No object can inherit the static method, it is only exclusive for the constructor.
    console.log('Its a static method');
  }
};

var mark=new Person6('Mark',1986,'Php developer');
mark.calcAge();
Person6.testing();  //calling 'static' method.

//note:-In ES6 classes the methods defined are automatically added to __proto__ of the object created from it using new keyword.
*/



/*
///////////////////////////////////////////////////////////////////////////
//Classes and subclasses

//ES5
var Person5= function(name, yearofbirth=1980, job){
      this.name= name,
      this.yearofbirth=yearofbirth,
      this.job=job
}

Person5.prototype.calcAge= function(){
  var age=2020-this.yearofbirth;
  console.log(age);
}

var Athlete5=function(name, yearofbirth, job, olympicAttend, medals){ //child method of 'Person5' method.
    Person5.call(this, name, yearofbirth, job);  //about the 'call' method, this will be invoked only when we create an instance of 'Athlete5' such as:- var john = new Athlete5 ('John', 1990, 'swimmer', 3, 10);. The 'Athlete5' function constructor will run, and the first thing it does is call the 'Person5' function constructor with the ‘this’ keyword set to our newly created 'Athlete5' object, which we have called 'johnAthlete5'.
    this.olympicAttend=olympicAttend;            //about the 'this' keyword, if 'calcAge()' were to have arguements passed to it, then they would be undefined without the Person5.call(this, name, yearOfBirth, job) call.
    this.medals=medals;
}

Athlete5.prototype=Object.create(Person5.prototype); //Basically, if you do Athlete5.prototype=Person5.prototype, and then it does some changes to Athlete5.prototype, those changes will be reflected in all instances of Person5 and all classes that inherit from Person5, and that's not what we want here. By doing Athlete5.prototype=Object.create(Person5.prototype), all you do is making the Athlete5.prototype an extension in the prototype chain where Person5.prototype is an ancestor, who has its own prototype ancestor and so on.

Athlete5.prototype.moreMedal=function(){
    this.medals++;
    console.log(this.medals);
};

var johnAthlete5=new Athlete5('john',1992,'runner', 3, 5); //creating an instance of 'Athlete5' fn which inherits its properties from 'Person5'.

johnAthlete5.calcAge();  //This is the method of 'Person5'.
johnAthlete5.moreMedal();

/*
Note:- reason why we cannot put 'Athlete5.prototype.moreMedal' prototype before 'Athlete5.prototype':-
Every function constructor has a prototype property with it. So when you define Athlete5 constructor, the prototype property of the function constructor gets set up. This default set up makes the Object.prototype, the prototype of this new Athlete5 constructor.
Now we want the prototype of Athlete5 to have Person5.prototype as its prototype. For this we will have to replace the prototype of Athlete5 with Person5.prototype
Object.create() gives you an option to make an already defined object a prototype of other object. Internally Object.create() method makes a new object with prototype as Person5.prototype and then it assigns it to the targeted Athlete5.prototype
So if you define wonMedal before setting up the Athlete5.prototype, then this function will get lost.

 Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}
 Athlete5.prototype = Object.create(Person5.prototype);  //wonMedal will be lost

It will get lost because Athlete5.prototype will now point to a new object given by Object.create()
I know it gets confusing with the prototype word because prototype is used in two contexts: One context is the prototype as in prototypical inheritance and one context is prototype as in Constructor.prototype property.
//

//ES6
class Person6{
  constructor(name, yearofbirth=1980, job){
      this.name=name;
      this.yearofbirth=yearofbirth;
      this.job=job;
  }

  calcAge(){
      var age=2020- this.yearofbirth;
      console.log(age);
  }
};

class Athlete6 extends Person6{ //child class of 'Person6' class.
    constructor(name, yearofbirth, job, olympicAttend, medals){
        super(name, yearofbirth, job); //why we need 'super'? if 'calcAge()'' were to have arguments passed to it, then they would be undefined without the 'super' keyword. In ES5, we used the help of 'call' and 'this' for inheritance but in class, it becomes very easy and direct.
        this.olympicAttend=olympicAttend;
        this.medals=medals;
    }

    moreMedal(){
      this.medals++;
      console.log(this.medals);
    }
};

var johnAthlete6=new Athlete6('john',1992,'runner', 3, 5);
johnAthlete6.moreMedal();
johnAthlete6.calcAge();
*/




/////////////////////////////////
// CODING CHALLENGE

/*

You're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/
class Town{
    constructor(name,buildyear){
        this.name=name;
        this.buildyear=buildyear;
    }
  };

  class Park extends Town{

    constructor(name, buildyear, area, numtrees){
         super(name, buildyear);
         this.area=area;
         this.numtrees=numtrees;
    }

    treedensity(){
        const density= this.numtrees/this.area;
        console.log(`${this.name} has the tree density of ${density}`);
     }
};

class Street extends Town{

    constructor(name, buildyear, length, size=3){
        super(name, buildyear);
        this.length=length;
        this.size=size;
    }

    streetclassify(){
       const classification= new Map();
       classification.set(1,'very small');
       classification.set(2,'small');
       classification.set(3,'average');
       classification.set(4,'large');
       classification.set(5,'huge');
       console.log(`${this.name}, build in ${this.buildyear}, is a ${classification.get(this.size)} street.`);
     }
};

const allParks=[new Park('Green Park', 1987, 0.2, 215),
                new Park('National Park', 1894, 2.9, 3541),
                new Park('Oak Park', 1953, 0.4, 949)];

const allStreets =  [new Street('Ocean Avenue', 1999, 1.1, 4),
                     new Street('Evergreen Street', 2008, 2.7, 2),
                     new Street('4th Street', 2015, 0.8),
                     new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calcAge(arr){ //This fn takes 2 arrays and returns 2 values.
   const sum=arr.reduce((prev,curr,index)=> prev + curr, 0); //'reduce' is an array prototype that has 3 values as arguments:-previous value, current value and the index value. They can be very handy when we have to use arithmetic calculations like summation of all the values, as we did here.
   return [sum, sum/arr.length];
}

function reportParks(p){

    console.log('PARKS REPORT-------------');

    //density
    p.forEach(el=> el.treedensity());

    //Average ages
    const age=p.map(el=>2020 - el.buildyear);
    const[totalAge, avgAge]= calcAge(age);
    console.log(`${p.length} parks have an average of ${avgAge} years age.`);

    //Which park has more than 1000 trees
    const i= p.map(el=> el.numtrees).findIndex(el=> el >=1000);//it will only hold 1 value.
    console.log(`${p[i].name} has more than 1000 trees`);
    //To hold more than 1 value, use below soln:-
    //       p.map(el => el.treeCount).forEach((el, index) => {
    //       if (el >= 1000) {
    //       console.log(`${p[index].name} has more than 1,000 trees.`);
    //       }
}

function reportStreets(s){

    console.log('STREETS REPORT-------------');

    //Total and average length of the town's streets
    var lenarray= s.map(el=>el.length);
    const[totallength,avglength]= calcAge(lenarray);
    console.log(`Our ${s.length} streets have a total length of ${totallength} km, with an average of ${avglength} km.`);

    // CLassify sizes
    s.forEach(el=> el.streetclassify());
}

reportParks(allParks);
reportStreets(allStreets);










//
