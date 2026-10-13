// //1. Declare a variable using var, assign it the value 10, reassign it to 20, and print the result.
// var a=10
// a=20
// console.log(a);  //a:20

// //2. Declare a variable using var with the value 30. Redeclare the same variable with the value 50 and print it.
// var b=30
// var b=50
// console.log(b);  //b:50

// //3. Declare a variable using let with the value 100. Reassign it to 200 and print the result.
// let c=100
// c=200
// console.log(c);   //c:200

// //4. Declare a variable using const to store your age. Print the value.
// const age=23
// console.log(age);  //age:23

// //5.Identify which variable declarations are valid and which are invalid: var, let, and const.
// // var is valid for reassign and redeclaration
// // let is valid for reassign not for redeclaration
// //const is not valid for reassign and redeclaration

// //6.Create three variables using var, let, and const to store your name, age, and city. Print all three.
// var name="sushmitha"
// let age1 =23
// const city="maddur"
// console.log(name);  //name:sushmitha
// console.log(age1);  //age1:23
// console.log(city);  //city:maddur


// //part2
// //7.Use prompt() to get the user's name and display it using alert().
// var name1="what is your name?"
// prompt(name1)

// //8. Use prompt() to get the user's age and print it using console.log().
// let age2="what is your age?"
// prompt(age2);

// //9. Use confirm() to ask the user whether they know JavaScript. Print the returned value.
// confirm("Do you know Javascript?")

// //10.Declare variables containing a string, number, boolean, and undefined value. Print each variable's value and type.
// var str="sushma";
// console.log(str);  //str:sushma
// console.log(typeof(str));    //string
// let num=23;
// console.log(num);  //num:23
// console.log(typeof(num));   //number
// var isStudent=false;
// console.log(isStudent);   //isStudent:false
// console.log(typeof(isStudent));     //boolean
// let address;
// console.log(address);   //undefined
// console.log(typeof(address));   //undefined

// //11.Create an array containing five fruits. Print the entire array, the first element, and the last element.
// let fruit=["Apple","Mango","chiku","jackfruit","Banana"];
// console.log(fruit); //friit:['Apple', 'Mango', 'chiku', 'jackfruit', 'Banana']
// console.log(fruit[0]);  //'Apple'
// console.log(fruit[fruit.length-1]); //'Banana'

// //12.Create an object containing a fruit array, an electronic-items array, and a vegetable name. Print each property separately.
// let items={
//     fruits:["Apple","Mango","jackfruit","Banana"],
//     electronic:["Laptop","TV"],
//     veggie:"carrot"
// }
// console.log(items.fruits);  //['Apple', 'Mango', 'jackfruit', 'Banana']
// console.log(items.electronic);  // ['Laptop', 'TV']
// console.log(items.veggie);  //carrot

// // //13.Declare two variables with values 15 and 4. Print their addition, subtraction, multiplication, and division.
// var x=15;
// var y=4;
// console.log(x+y);   //19
// console.log(x-y);   //11
// console.log(x*y);   //60
// console.log(x/y);   //3.75

// //14. Find the remainder when 27 is divided by 5 using the modulus operator.
// var z=27%5;
// console.log(z); //2

// //15. Calculate \(3^4\) using the exponentiation operator.
// let expo=3**4;
// console.log(expo);  //81

// //16. Declare a variable with the value 10. Apply the pre-increment operator and print the result.
// var inc=10;
// ++inc
// console.log(inc);   //11

// //17.Declare a variable with the value 10. Apply the pre-decrement operator and print the result.
// let dec=10;
// --dec
// console.log(dec);   //9

// //18. Predict the output:
// let x1 = 5;
// let y1 = x1++;
// console.log(x1);    //6
// console.log(y1);    //5

// //19. Predict the output:
// let a1 = 4;
// console.log(a1++);   //4
// console.log(a1); //5

// // 20. Predict the output:
// let a2 = 4;
// console.log(++a2);   //5
// console.log(a2);     //5

// let a3 = 8;
// let b2 = a3++;
// console.log(a3); //9
// console.log(b2); //8


// let a = 8;
// let b = ++a;
// console.log(a); //9
// console.log(b);//9

// let a = 6;
// let b = a--;
// console.log(a); //5
// console.log(b); //6

// let a = 6;
// let b = --a;
// console.log(a); //5
// console.log(b); //5

// let a = 2;
// a++;
// a++;
// console.log(a);  //4

// let a = 10;
// --a;
// --a;
// console.log(a); //8

// let b = 3;
// b = b++;
// console.log(b); //3

// let c = 4;
// let d = c++;
// console.log("c:", c);   //5
// console.log("d:", d);   //4

// let e = 5;
// let f = --e;
// console.log("e:", e);   //4
// console.log("f:", f);   //4

// let a = 5;
// let b = a++;
// let c = ++a;

// console.log(a); //7
// console.log(b); //5
// console.log(c); //7