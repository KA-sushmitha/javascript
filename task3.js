// //1.Declare variables using var, let, and const. Reassign and redeclare them wherever allowed, then print the results.
// var name="priya"
// name="divya"
// var name="sushma"
// console.log(name);   //sushma

// let age ="22"
// age=23
// // let age
// console.log(age);   //23

// const job="software"
// // job="developer"
// console.log(job)    //software

// //2.Create variables for your name, age, and programming knowledge. Print each variable and its data type using typeof.
// let name1="Sushma"
// var age1=23
// let isProgrammingKnowedge=true
// console.log(name1,typeof name1) // sushma,string
// console.log(age1,typeof age1);  //23,'number'
// console.log(isProgrammingKnowedge,typeof isProgrammingKnowedge) //true,'boolean'

// //3.Create an array of 5 fruits. Print the complete array, the first element, and the last element.
// let fruits=["Mango","Orange","Banana","Avacado","DragonFruit"]
// console.log(fruits);    // ['Mango', 'Orange', 'Banana', 'Avacado', 'DragonFruit']
// console.log(fruits[0]); //Mango
// console.log(fruits[fruits.length-1]);   //Dragonfruit

// //4.Create an object containing your name, role, and CGPA. Print each property separately.
// var profile={
//     name2:"Sushmitha K A",
//     role:"Java FullStack developer",
//     CGPA:8.02
// }
// console.log(profile.name2); //Sushmitha K A
// console.log(profile.role);  //Java FullStack developer
// console.log(profile.CGPA);  //8.02

// //5.Take the user's name and age using prompt(). Display the name using alert() and print the age in the console.
// let username=prompt("What is your name?")
// alert(username)
// var userage=prompt("How old your are?")
// console.log(userage);

// //6.Declare two numbers and perform addition, subtraction, multiplication, division, modulus, and exponentiation.

// let x=14
// let y=5
// console.log(x+y);   //19
// console.log(x-y);   //9
// console.log(x*y);   //70
// console.log(x/y);   //2.8
// console.log(x%y);   //4
// console.log(x**y);  //537824

// //7.Predict the output:
// let a = 5;
// console.log(a++);   //5
// console.log(a);     //6
// console.log(++a);   //7

// //8. Predict the output:
// let a = 10;
// let b = a--;
// let c = --a;
// console.log(a); //8
// console.log(b); //10
// console.log(c); //8

// //9.Use the +=, -=, *=, /=, and %= assignment operators on a variable and print the final value after each operation.
// let val=25
// val+=3
// console.log(val);   //28
// val-=4
// console.log(val);   //24
// val*=2
// console.log(val);   //48
// val/=5
// console.log(val);   //9.6
// val%=6
// console.log(val);   //3.599

// //10. Predict the results of these comparisons:
// console.log(5 == "5");  //true
// console.log(5 === "5"); //false
// console.log(10 != "10");    //false
// console.log(10 !== "10");   //true

// //11.Use &&, ||, and ! to check different combinations of conditions.

// console.log(56+4 > 24 && 43<12 || 12*3<875/5);   //true
// console.log(!(50==60)); //true
// console.log(10>5 && 15<10); //false
// console.log(0 && 100);  //0
// console.log(0 || 100);  //100
// console.log(!(5>10) && (10<20) || (5>100)); //true
// console.log(12*3 > 973 || 60 < 24); //false
// console.log(342 >13*2 && 68+32<50); //false

// //12.Use the ternary operator to check whether a user's age is 18 or above and print an appropriate message.

// let age2=22;
// let message= age2>=18? "your are a adult" : "you are a children";
// console.log(message);   //your are a adult

// //13. Predict the data type of each expression:
// console.log(typeof ("hello" + 10)); //string
// console.log(typeof (10 + true));    //number
// console.log(typeof (10 + null));    //number
// console.log(typeof ("hello" + undefined));  //string

// //14.Use Number() to convert a value received through prompt() into a number. Add 10 and print the result.
// let value=prompt("enter a num:")
// let num1=Number(value)
// let result=num1+10
// console.log(result) //30

// //15.Use Boolean() to check the Boolean values of an empty string, a non-empty string, 0, and true.
// console.log(Boolean(""));   //fasle
// console.log(Boolean("hello"));  //true
// console.log(Boolean(0));    //false
// console.log(Boolean(true)); //true

// //16.Write an if-else statement to check whether a number is positive or not.
// let numb=prompt()
// if(numb>0){
//     console.log( numb,"is positive number");
// }
// else{
//     console.log(numb,"is negative number");
    
// }

// //17.Use else-if to display a message based on the time entered by the user: early morning, morning, afternoon, evening, or night.
// let time=Number(prompt("enter the time"));
// if (time>=4 && time <6){
//     console.log("it's a early morning");
// }
// else if(time>=6 && time<12){
//     console.log("Good Morning");
// }
// else if(time>12 && time <16){
//     console.log("Good Afternoon");
    
// }
// else if(time>16 && time<19){
//     console.log("Good Evening");
// }
// else if((time>19 && time<=23) || (time >0 && time<4)){
//     console.log("Good Night");  
// }
// else {
//     console.log("Invalid time"); 
// }

// //18.Create a nested if statement to check eligibility based on age, height, and weight, following the conditions in your code.
// let age3=prompt("enter the age")
// let height=prompt("enter the height")
// let weight=prompt("enter the weight");

// if (age3>18){
//     if (height>155){
//         if (weight>=50){
//             console.log("congragulations,you are eligible for boxing");           
//         }
//         else{
//             console.log("you are not eligible :weight is too low");    
//         }
//     }
//     else{
//         console.log("you are not eligible:height is too low");
//     }
// }
// else{
//     console.log("your are not eligible:your age must be above 18");
     
// }

// //19.Use switch to display a message based on a traffic light color: red, yellow, or green. Display an error for an invalid color.
// var traffic=prompt("what is the traffic light color:")
// switch(traffic){
//     case"red":console.log("Stop!");
//     break;
//     case "yellow":console.log("Start the vehicle");
//     break;
//     case "green":console.log("Go! or move the vehicle");
//     break;
//     default:console.log("invalid traffic color");
//     break;
// }

// console.clear()

// //20.Use a for loop to print numbers from 1 to 20.

// for(let i=1;i<=20;i++){
// console.log(i);
// }

// //21.Use a for loop to print all even numbers from 2 to 20.
// for (let i=2; i<=20;i+=2){
//     console.log(i);
// }

// // //22.Use a while loop to print numbers from 10 down to 1.
// let j=10
// while(j>=1){
//     console.log(j);  
//     j--
// }

// //23.Use a do-while loop to print numbers from 1 to 10.
// let k=1
// do{
//     console.log(k);
//     k++;
// }
// while(k<=10)

// //24.Use a for-of loop to print each character in the string "JavaScript".
// let text="Javascript";
// for (let char of text){
//     console.log(char);
// }

// // 25.Use a for-of loop to print every element in an array of 5 student names.
// let stud=["sushma","priya","rakshi","divya","shamanth"]
// for (let names of stud){
//     console.log(names);
// }
// //  sushma
// //  priya
// //  rakshi
// //  divya
// //  shamanth

// // 26.Use a for-in loop to print all keys and values of this object:
// let student = {
//     name: "Priya",
//     role: "Frontend Developer",
//     cgpa: 9
// };
// for (let key in student){
//     console.log(key,":",student[key]); 
// }
// //name : Priya
// // role : Frontend Developer
// // cgpa : 9

// //27. Take two numbers using prompt() and display their sum, difference, product, and remainder.
// let m =Number(prompt("enter the number"))
// let n =Number(prompt("enter the number"))

// console.log("sum:",m+n);
// console.log("difference:",m-n);
// console.log("product:",m*n);
// console.log("remainder:",m%n);

// // Sum: 26   m:20 and n:6
// // Difference: 14
// // Product: 120
// // Remainder: 2

// //28. Create an array of 5 numbers and use a loop to print only the numbers greater than 10.
// let numbers=[5,12,8,25,15];

// for (let num of numbers){
//     if (num>10){
//         console.log(num);
//     }
// }

// // 12
// // 25
// // 15

// //29. Take a user's age using prompt(). Check eligibility and display the result using alert().


// let agee = Number(prompt("Enter your age:"));

// if (agee >= 18) {
//     alert("You are eligible.");
// } else {
//     alert("You are not eligible.");
// }

// // age:22
// // You are eligible.

// // 30. Create a simple menu using switch for arithmetic operations.
let choice = prompt(
    "Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"
);
let a = Number(prompt("Enter the first number:"));
let b = Number(prompt("Enter the second number:"));

switch (choice) {
    case "1":
        alert("Sum = " + (a + b));
        break;

    case "2":
        alert("Difference = " + (a - b));
        break;

    case "3":
        alert("Product = " + (a * b));
        break;

    case "4":
        if (b !== 0) {
            alert("Division = " + (a / b));
        } else {
            alert("Cannot divide by zero.");
        }
        break;

    default:
        alert("Invalid choice. Please select 1, 2, 3, or 4.");
}