/*
//variable and data types
console.log("Hello world")

var firstname="john";
console.log(firstname);

var lastname="doski";
console.log(lastname);

var age=28;
console.log(age);

var bool=false;
console.log(bool);

var job;
console.log(job);
*/


/*
//variable mutation and type coercion
var firstname= 'john';
var age=28;

//type coercion- while adding different variables through operators, javascript will automatically convert all the variables with different data types into 1 datatype.
console.log(firstname + ' ' + age);

var job,  ismarried;
job='teacher';
ismarried=false;

console.log(firstname + ' is a ' + age + ' year old ' + job + '. Is he married?'+ ' '+ ismarried);

//variable mutation- it allows the defined variables to change its values. This is a concept of dynamic programming.
age='twenty eight';
job='driver';

alert(firstname + ' is a ' + age + ' year old ' + job + '. Is he married?'+ ' '+ ismarried);

var lastname= prompt('what is his lastname?');
console.log(firstname + ' '+ lastname);
*/


/******basic operators *****/
//math operators
/*
var year, yearjohn, yearmark;
year= 2018;
var agejohn= 28;
var agemark= 33;

yearjohn= year-agejohn;
yearmark= year-agemark;

console.log(yearjohn, yearmark);

console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

//logical operators
var johnOlder= yearjohn >yearmark;
console.log(johnOlder);

//type of operators
console.log(typeof johnOlder);
console.log(typeof yearjohn);
console.log(typeof 'how are you?');
var x;
console.log(typeof x);
*/


/*
//Operator Precedence (which operator is executed first)
var now =2018;
var yearjohn =1989;
var fullage=18;

//multiple operators
var fullage = now - yearjohn > fullage;
console.log(fullage);

//grouping
var agejohn= now- yearjohn;
var agemark= 35;
var average=(agejohn + agemark) / 2;
console.log(average);

//multiple assignments
var x , y;
x = y =(3+ 5)* 4 + 6; //will be calculated from rigth to left
console.log(x, y);

//more operators
x+=2;
console.log(x);
x*=2;
console.log(x);
x--;
console.log(x);
*/


/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3.
*/

/*
var markmass=65;
var johnmass=72;

var markheight=178;
var johnheight=183;

var BMIMark= markmass/(markheight* markheight);
var BMIJohn= johnmass/(johnheight* johnheight);

var higherBMI= BMIMark > BMIJohn;

console.log('Do Mark has higher BMI?'+ ' ' + higherBMI);
*/


/*
// If / else Statements
var firstname= 'John';
var civilstatus= 'married';

if(civilstatus=='married'){
  console.log(firstname + ' is married.');
}
else{
  console.log(firstname + ' is not married.');
};

var ismarried= false;
if (ismarried){
  console.log(firstname + ' is married!');
}
else{
  console.log(firstname+ ' is not married.');
}
*/


/*
//Boolean Logic
var firstname='raj';
var age=45;

if(age <= 13){
  console.log(firstname + ' is a boy');
}
else if(age >13 && age < 20){
  console.log(firstname + ' is a teen');
}
else if(age >= 20 && age < 25){
  console.log(firstname + ' is a young man');
}
else if(age ==25 || age ==26 ){
  console.log(firstname + ' is an male employee');
}
else{
  console.log(firstname + ' is a man');
};
*/


/*
//Ternary operators
var firstname ='mike';
var age =16;

age >=18 ? console.log(firstname + ' drinks beer') : console.log(firstname + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch Statement
var job='teacher';

switch(job){
      case 'driver':
        console.log(firstname + ' is a driver');
        break;
      case 'teacher':
        console.log(firstname + ' is a teacher');
        break;
      case 'lawyer':
        console.log(firstname + ' is a lawyer');
        break;
      default:
        console.log(firstname + ' does something else');
};

//another example
age=22;

switch(true){
    case age< 13:
      console.log(firstname + ' is a boy');
      break;
    case (age> 13 && age < 20):
      console.log(firstname + ' is a teen');
      break;
    default:
    console.log(firstname + ' is a man');
}
*/


/*
//Truthy and Falsy values and equality operators
//Falsy values : undefined , null, 0 ,NaN (not a number)
//Truthy values : not falsy Values

var height;
if(height){
  console.log('variable is defined');
}
else{
  console.log('variable is not defined');
}

height=23;
if(height){
  console.log('variable is defined');
}
else{
  console.log('variable is not defined');
}

height=0;
if(height || height===0){   //'===' means strict equality. It won't allow type coercion. '==' allows type coercion.
  console.log('variable is defined');
}
else{
  console.log('variable is not defined');
}

//The equality operator
height=23;
if(height=='23'){ //
  console.log('The == operator does type coercion');
}
else{
  console.log('The == operator does not do type coercion');
}
*/


/*****************************
CODING CHALLENGE 2
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points,
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console.
 Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
 Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/
/*
var johnscore=(89+120+103)/3;
var mikescore=(77+94+123)/3;
console.log(johnscore);
console.log(mikescore);

if(johnscore > mikescore){
  console.log('john\'s team has better average which is ' + johnscore);
}
else if(johnscore === mikescore){
  console.log('Its a draw');
}
else{
  console.log(' mike\'s team has better average which is ' + mikescore);
};

//another example
var johnscore=(89+120+103)/3;
var mikescore=(77+94+123)/3;
var maryscore=(97+134+105)/3;

console.log(johnscore);
console.log(mikescore);
console.log(maryscore);

if(johnscore > mikescore && johnscore > maryscore){
  console.log('john\s team has better average which is ' + johnscore);
}
else if(mikescore > johnscore && mikescore > maryscore){
  console.log('mike\s team has better average which is ' + mikescore);
}
else{
  console.log(' mary\'s team has better average which is ' + maryscore);
};
*/


/*
//Functions
function calculateage(birthyear){
  return (2020-birthyear);
}
var john=calculateage(1993);
var mike=calculateage(1948);
var jane=calculateage(1969);
console.log(john,mike,jane);

function yearsuntilretirement(year, name){
  var age=calculateage(year);
  var retirement=65-age;
  if(retirement > 0){
    console.log(name+ ' has '+ retirement+' years before  retirement.');
  }
  else{
    console.log(name+ ' has already retired.');
  }
};

yearsuntilretirement(1993,'john');
yearsuntilretirement(1948,'mike');
yearsuntilretirement(1969,'jane');
*/


/*
// --function declaration and expressions
//Function Declaration ex-
//function whatdoyoudo(job, name) - There is no rrequirement of immediate return of value. It is a common way of writing a function.

//Function Expression  -  Expression simply means that the statement or the conditon has to return a value. Function expression
// means a function that will return a value.

var whatdoyoudo= function(job, name){
  switch(job){
    case 'teacher':
       return name + ' helps kids';
    case 'driver':
       return name + ' drives bus';
    case 'lawyer':
       return name + 'practices law';
    default:
      return 'unknown profession';
  };
};

console.log(whatdoyoudo('teacher', 'john'));
console.log(whatdoyoudo('retired', 'mike'));
console.log(whatdoyoudo('driver', 'rick'));
*/


/*
//--Arrays
//Initialize new array
var names= ['john','ritesh','mike'];
var years= new Array(1990, 1967, 1978);

console.log(names[2]);
console.log(names.length);

//mutate the array
names[1]= 'jason';
names[names.length]='mira';
console.log(names);

//different datatypes
var john=['John','Smith',1990, 'teacher','false'];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();//removes last element
john.pop()
console.log(john);
john.shift(); //remove first element
console.log(john);

console.log(john.indexOf(23)); //finds out the index of the element in array if present. Thus ,can also used to find out whether the elenment is present in the array.

var isteacher= john.indexOf('designer')==-1 ? console.log('element is present'):
                                              console.log('element is not present');
*/


/*
* CODING CHALLENGE 3
*/
/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
---In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/
/*
var amount;
function motelbill(amount){
  if(amount< 50){
    return 20/100*amount;
  }
  else if(amount>50 && amount<200){
      return 15/100*amount;
  }
  else{
    return 10/100*amount;
 }
};

var bill1=motelbill(124);
var bill2=motelbill(48);
var bill3=motelbill(268);

var initialbill=[124,48,268];

var fbill1=initialbill[0]+bill1;
var fbill2=initialbill[1]+bill2;
var fbill3=initialbill[2]+bill3;

var finalbill=[fbill1,fbill2,fbill3];

console.log(initialbill);
console.log(finalbill);
*/


/*
//********Objects and Properties******
//Object literal
//Below is the first way of declaring and defining the object.
var john= {
  firstname: 'john',
  lastname: 'smith',
  birthyear: 1990,
  family: ['jane','mike','stuart','emily'],
  job:'teacher',
  ismarried: false
};
console.log(john);
console.log(john.firstname); //using dot notation to call the element of object. dot notation is better for calling an element of object.
console.log(john['lastname']);//bracket notation can also b used to call an element of object, but you have to write the element name as string. Prefer dot notation.
var x= 'birthyear'; // we can also assign a variable for the element that can used later instead of actual element name.
console.log(john[x]);

//we can also change the data(mutate) of objects.
john.job='designer';
john['ismarried']=true;
console.log(john);

//other way of defining the object
var jane= new Object();
jane.firstname='jane';
jane['lastname']='clarke';
jane.birthyear=1980;
console.log(jane);
*/

/*
//***Objects and Methods**
//1st way of writing a method in an object
var john= {
  firstname: 'john',
  lastname: 'smith',
  birthyear: 1986,
  family: ['jane','mike','stuart','emily'],
  job:'teacher',
  ismarried: false,
  calage: function(birthyear){
    return 2020 - birthyear;
  }
};
console.log(john.calage(1986));// it is just like a normal function.

//2nd example
var john= {
  firstname: 'john',
  lastname: 'smith',
  birthyear: 1986,
  family: ['jane','mike','stuart','emily'],
  job:'teacher',
  ismarried: false,
  calage: function(){
    return 2020 - this.birthyear; //we are not using any arguments here. Instead we are calling an element of the object itself using 'this' keyword .
       }                          //'this' basically means the currrent object. Here, it is john.
    };
john.age= john.calage();
console.log(john.age);

//3rd example
var john= {
  firstname: 'john',
  lastname: 'smith',
  birthyear: 1986,
  family: ['jane','mike','stuart','emily'],
  job:'teacher',
  ismarried: false,
  calage: function(){
    this.age= 2020 - this.birthyear; //Here , instead of returning a value , we are storing the value in a variable defined instantly using 'this' keyword.cont.
  } // we just have to call this function somewhere.
};
john.calage();
console.log(john);
*/


/****************************
-- CODING CHALLENGE 4
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/
/*
var john={
  firstname:'john',
  lastname:'smith',
  mass:67,
  height:1.76,
  bmij:function(){
    return this.mass/(this.height*this.height);
  }
};
john.bmijohn= john.bmij();
console.log(john);

var mike={
  firstname:'mike',
  lastname:'henderson',
  mass:81,
  height:1.82,
  bmim:function(){
    this.bmimike= this.mass/(this.height*this.height);
    return this.bmi;
  }
};
mike.bmim();
console.log(mike);

function highestBMI(){
  if(john.bmijohn > mike.bmimike){
    console.log(john.firstname + ' has higher BMI which is '+ john.bmijohn);
  }
  else if( mike.bmimike > john.bmijohn ){
    console.log(mike.firstname + ' has higher BMI which is '+ mike.bmimike);
  }
  else{
    console.log('BMI is equal');
     }
  };

highestBMI();
*/


/*
//**Loops and Iteration***
//for Loop
for(var i=0; i<5; i++){
  console.log(i);
}

var john=['John','Smith',1990, 'teacher',false,'blue'];

for(var i=0; i< john.length; i++){
  console.log(john[i]);
}

//while Loop
var i=0;
while(i<john.length){
  console.log(john[i]);
  i++;
};

//continue and break statement
var john=['John','Smith',1990, 'teacher',false,'blue'];
for(var i=0; i< john.length; i++){
  if(typeof john[i]!=='string') continue; //in the 'continue' statement , if the condition is not satisfied, then the next iteration will start and the currrent one will end.
  console.log(john[i]);
}

var john=['John','Smith',1990, 'teacher',false,'blue'];
for(var i=0; i< john.length; i++){
  if(typeof john[i]!=='string') break; //in the break statement, if the condition is not satisfied , the whole loop will break and we will come out of loop.
  console.log(john[i]);
}

//Looping backwards
for(var j=john.length-1 ; j >=0; j--){  //-1 because the arrays starts with 0. So, we need to get the exact location of the element which is 1 behind the actual number.
  console.log(john[j]);
}
*/


 //****CODING CHALLENGE 5*******
/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200,
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300,
and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips.
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0).
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

var john={
  firtname:'john',
  lastname:'smith',
  johnbill:[124,48,268,180,42],
  calcbill:function(){
            this.finaltip=[];
            this.finalbill=[];
            for(var i=0; i<this.johnbill.length ; i++){
                  var tip;
                  var bill= this.johnbill[i];
                  if(bill <50){
                      tip=bill*0.2;
                  }
                  else if(bill >=50 && bill <= 200){
                      tip=bill*0.15;
                  }
                  else{
                      tip=bill*0.1;
                  };
                  this.finaltip[i]= tip;
                  this.finalbill[i]= bill+ tip;
              }
            }
    };

john.calcbill();
console.log(john);

var mark={
  firtname:'mark',
  lastname:'white',
  markbill:[77,375, 110, 45],
  calcbill:function(){
            this.finaltip=[];
            this.finalbill=[];
            for(var i=0; i<this.markbill.length ; i++){
                  var tip;
                  var bill= this.markbill[i];
                  if(bill <50){
                      tip=bill*0.2;
                  }
                  else if(bill >=50 && bill <= 200){
                      tip=bill*0.15;
                  }
                  else{
                      tip=bill*0.1;
                  };
                  this.finaltip[i]= tip;
                  this.finalbill[i]= bill+ tip;
              }
            }
    };

mark.calcbill();
console.log(mark);


function avgtip(final){
    var totalvalue=0;
    var avgvalue=0;
    for(var k=0; k< final.length; k++){
      totalvalue+= final[k];
    }
    var avgvalue=totalvalue/ (final.length);
    return avgvalue;
}

var johnavg=avgtip(john.johnbill);
var markavg=avgtip(mark.markbill);
console.log(johnavg);
console.log(markavg);

function highest(){
    if(johnavg > markavg){
      console.log('John\'s average is higher');
    }
    else if(markavg > johnavg){
      console.log('mark\'s average is higher');
    }
    else{
      console.log('average is equal');
    }
};
highest();
