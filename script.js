//Create a var variable called name and initialize it with your name.

var name = "Sushmitha K A";
console.log(name)  
//output: Sushmitha K A

// Create a var variable called age with value 25. Reassign it to 30 and print it.

var age =25;
console.log(age)  //output:25
age=30
console.log(age)  //output:30

// Create a var variable called city, assign "Chennai", then reassign "Bangalore". Print the final value.

var city= "chennai";
    city="Bangalore";
    console.log(city)   //output:Bangalore

// Create a var variable called salary and initialize it with 25000. Redeclare it with 35000. Print the value.

var salary=25000;
var salary=35000;
console.log(salary)    //output:35000

//Create a var variable, assign a value, reassign it, and redeclare it. Print the final value.

var address="bangalore";
console.log(address)      //output:bangalore
address="mandya";

var address="maddur";
console.log(address)       //output:maddur

//Create a var variable called department with "ECE" and redeclare it with "CSE".
var department="ECE";
var department="CSE";
console.log(department)   //output:CSE

//Create a var variable called mark with 50, reassign it to 75, and print it.

var mark=50;
mark=75;
console.log(mark)  //output:75

//Create a var variable called company and redeclare it with another company name.
var company="Stackly";
var company="Intel";
console.log(company)   //output:Intel

//Create a var variable without assigning a value, then initialize it later and print it.
var a;
a=2.04;
console.log(a)  //output:2.04

//Create one var variable and change its value three times. Print the final value.
var weight=22.5;
weight=36.8;
weight=43.1;
weight=50.6;
console.log(weight)   //output:50.6

// -----------Let--------------

//Create a let variable called age and initialize it with your age. Print it.
let age1=23;
console.log(age1)   //output:23

//Create a let variable called salary, initialize it with 30000, then reassign it to 40000.
let salary1=30000;
salary1=40000;
console.log(salary1);  //output:40000

//Create a let variable called name, assign your name, then change it to another name.
let name1="Sushmitha";
name1="Priya";
console.log(name1);   //output:Priya

//Create a let variable called department and change its value from "ECE" to "CSE".
let department1="ECE";
department1="CSE";
console.log(department1)   //output:CSE

//Create a let variable called mark, initialize it with 60, then reassign it to 90.
let mark1=60;
mark1=90;
console.log(mark1);    //output:90

//Declare a let variable without initialization. Later assign a value and print it.
let a1;
a1=25;
console.log(a1);   //output:25

//Try to redeclare the same let variable. Observe what happens.
// let a1=17;
// console.log(a1)  // Identifier 'a1' has already been declared


//Create a let variable called city and reassign it two times. Print the final value.
let city1="mysuru";
city1="bengaluru";
city1="Mandya";
console.log(city1);   //output:Mandya

//Create three different let variables and print all three.
let c=34;
console.log(c);  //output:34

let c1="Sushma";
console.log(c1);   //output:Sushma

let c2=56.2;
console.log(c2);   //output:56.2

//Create a let variable, initialize it, reassign it, and try to redeclare it.
let Dog="golden retriver";
Dog="doberman";
// let Dog;
console.log(Dog);  //output:doberman


// -----------------const-----------

//Create a const variable called age with value 25 and print it.
const age2=25;
console.log(age2);   //output:25

// Create a const variable called salary with value 50000 and print it.
const salary2=50000;
console.log(salary2);  //output:50000

//Create a const variable called company with "Stackly" and print it.
const company1="Stackly";
console.log(company1);   //output:Stackly
//Try to reassign a const variable with another value. Observe the result.

// company1="intel";    //Uncaught TypeError: Assignment to constant variable.
// const company1;
// console.log(company1);

//Create a const variable called college and initialize it with your college name.
const college="Ghousia college of Engineering";
console.log(college);    //output:Ghousia college of Engineering

//Create three const variables for name, age, and department. Print them.
const name3="sushmitha";
const age3=23;
const department2="software development";
console.log(name3)   //output:sushmitha
console.log(age3)    //output:23
console.log(department2)    //output:software development

//Write a program using one var, one let, and one const variable. Print all three.
var school="st.anne's";
let year=1990;
const place="maddur";
console.log(school);    //output:st.anne's
console.log(year);      //output:1990
console.log(place);     //output:maddur

//Print your name using console.log().
var myname="sushmitha";
console.log(myname);     //output:sushmitha

//Create a variable containing your age and print it using console.log().
let myage=23;
console.log(myage);  //output:23

//Print the number 100 using console.log().
const num=100;
console.log(num);  //output:100

//Create three variables and print their values using console.log().
var x=12;
let y="Sushma";
const z=23.56;
console.log(x)  //output:12
console.log(y)  //output:Sushma
console.log(z)  //output:23.56

//Create a variable called message with "Hello JavaScript" and print it.
var msg="Hello JavaScript";
console.log(msg);   //output:Hello JavaScript

//Create a variable, print its value, change its value, and print it again.
var val=359;
console.log(val);   //output:359
val=717;
console.log(val);   //output:717

//Print your name, age, and qualification using three separate console.log() statements.
var name4="Sushmitha";
console.log(name4); //output:Sushmitha
var age4=23;
console.log(age4);  //output:23
var qualification="B.E";
console.log(qualification); //output:B.E

// ------alert()------

//Display "Welcome to JavaScript" using alert().
var msg1="Welcome to JavaScript";
alert(msg1);   //output:Welcome to JavaScript

//Create a variable called userName and display it using alert().
let username="sushma";
alert(username)  //output:sushma

//Create a variable called userAge and display it using alert().
var userage=23;
alert(userage); //output:23

//Create a variable containing "Welcome Naveen" and show it in a popup.
var greet="Welcome Sushmitha";
alert(greet);   //output:Welcome Sushmitha

//Create a variable containing your qualification and display it using alert().
var qualification1="B.E";
alert(qualification1);  //output:B.E

// ----------prompt()-----------

//Ask the user "What is your name?" using prompt() and print the answer in the console.
var QA="What is your name?";
console.log(prompt(QA)); //output:sushma

//Ask the user "How old are you?" using prompt() and display the answer using alert().
var QA1="How old are you?";
alert(prompt(QA1))  //output:23

//Ask the user for their qualification and print the answer in the console.
let QA2="what is your qualification?";
console.log(prompt(QA2))   //output:BE

//Ask the user for their name and show the entered name in a popup.
var user="what is your good name?";
alert(prompt(user));  //output:what is your good name?

//Ask the user for their age and print the entered age in the console.
let yourage="how old you are?";
console.log(prompt(yourage));   //output:how old you are/

// ------confirm() & document.writeln() ------

//Create a confirmation box asking "Do you know programming?".
var QA3=confirm("Do you know programming?"); //output:Do you know programming?
alert(QA3)  //output:true

//Create a variable containing "Welcome to Batch 41" and display it using document.writeln().
var greet1="Welcome to Batch 41";
document.writeln(greet1)    //output:Welcome to Batch 41
;
//Ask the user "Do you want to continue?" using confirm().
let QA4=confirm("Do you want to continue?");
alert(QA4)  //output:true

// ---------Console Methods----------

// Write one program that uses console.log(), console.warn(), and console.error() to display three different messages.
var username1="my name is sushmitha";
console.log(username1); //output:my name is sushmitha
var userage1="please check your entered age";
console.warn(userage1); //output:please check your entered age
let password="wrong password! try again";
console.error(password);    //output:wrong password! try again

//Write a program using console.log(), console.warn(), console.error(), and console.clear(). Observe what happens after each statement.
var email="Sushma12@gmail.com";
console.log(email); //output:Sushma12@gmail.com
let mail= "don't use # in email";
console.warn(mail); //output:don't use # in email
var email2="your email is is wrong";
console.error(email2);  //output:your email is is wrong

console.clear() //output:Console was cleared

