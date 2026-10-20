// 1.Create a function welcome() that prints "Welcome to JavaScript".

function welcome(){
    console.log("Welcome to JavaScript");
}
welcome()   //o/p:Welcome to JavaScript

// 2.Create a function studentDetails(name, age, cgpa) that prints all three values. Call it with two different students.
let studentDetails=function(name,age,cgpa){
    console.log("Name:",name); 
    console.log("age:",age);
    console.log("cgpa:",cgpa);
    
    
}
studentDetails("sushma",23,8.02)
studentDetails("priya",21,7.8)

// Name: sushma
// age: 23
//  cgpa: 8.02
//  Name: priya
//  age: 21
//  cgpa: 7.8

// 3.Create a function calculateFee(fee) that returns the student fee. Store the returned value in a variable and print it.
function calculateFee(fee){
    return fee;
}
var fee=calculateFee(170000)
console.log(fee);

// 4.Create a function discount(percent) that calculates a discount on a fee of ₹200,000 and prints the final fee.
let fees=200000
function discount(percent){
    console.log(percent,"%");
    let percentamount=(fees*percent/100);
    console.log("Total fee:",fees-percentamount);         
}
discount(25)

//5.Create a function studentForm(name, age, disability = "no"). Call it three times, including once without passing the disability argument.
function studentForm(name, age, disability = "no"){
    console.log("Name:",name);
    console.log("Age:",age);
    console.log("Disability:",disability);
}
studentForm("rakshi",24,"no");
studentForm("sushma",23);
studentForm("Guru",32,"Yes");

// 6.Create a named function that accepts a message and prints it.
function greet(msg){
    return msg
}
console.log(greet("Hi,Goodmorning"));

// 7.Create an anonymous function and store it in a variable. Pass a name to it and print the name.
let company=function(name){
    console.log("welcome to",name);
};
company("Stackly");

// 8.Create an arrow function that accepts a number and prints it.
const printnumber=(num)=>{
    console.log(num);   
};
printnumber(Number(717));

// 9.Create a function containing var, let, and const inside an if block. Check which variables can be accessed inside and outside the block.
function greet(){
    if(true){
        var morning="Good Morning";
        let afternoon="Good Afternoon"
        const evening="Good Evening"
        
        console.log("inside if:",morning);  //inside if: Good Morning
        console.log("inside if:",afternoon);    //inside if: Good Afternoon
        console.log("inside if:",evening);  //inside if: Good Evening
        
    }
    console.log("outside if:",morning); //outside if: Good Morning
    // console.log("outside if:",afternoon);   ReferenceError:
    // console.log("outside if:",evening); //ReferenceError:
}
greet()

//10.Predict the output of this code:
console.log(value); //undefined
var value = 10;

//11.Create two functions, first() and second(). Pass second as a callback to first() and execute it inside first()
// function first(callback){
//     console.log("first func execute");
//     callback()
// }
// function second(){
//     console.log("second func executed");  
// }
// first(second())

//second func executed
//first func execute

//12.Create an add(callback, a, b) function that prints the sum of two numbers and then calls the callback with two numbers.
var add=function(callback,a,b){
    console.log("addition of a,b:",a+b);    //addition of a,b: 30
    callback(10,50)
};

var sub=(x,y) => {
    console.log("sub of x,y:",x-y);     //sub of x,y: -40
};
add(sub,10,20);

//13.Create a sub(num1, num2) arrow function and pass it as a callback to the add() function.
let sub1=(num1,num2) => {
    return num1-num2;
}
function add1(callback){
    console.log(callback(20,10));
}
add1(sub1)  //10

//14.Create a multiply(callback, a, b) function that prints the multiplication result and then executes the callback.
function display(){
    //
}

function multiply(callback, a, b){
    console.log(a*b);
    callback()  
}
multiply(display,5,15)

// 15.Create a divide(num1, num2) function and pass it as a callback to another function.
function display1(){
    //
}

function divide(callback,num1,num2){
    console.log(num1/num2)
    callback()
}
divide(display1,60,3)

// 16.Create a higher-order function that accepts a callback and calls it with a student's name.
function displayStud(name){
    console.log("The student name is:",name);
    
}
function studentName(callback){
    callback("Sushmitha")
}
studentName(displayStud)

//17.Create a generator function that yields these values one by one: "10% cashback", "30% cashback", and "Better luck next time".
function* offer(){
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
let result=offer();

console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);

// 10% cashback
// 30% cashback
// Better luck next time

// 18.Call .next() three times on a generator object and observe the returned values.
function* myobject(){
    yield "hello";
    yield "javascript";
    yield "world";

}
let call=myobject()

console.log(call.next());
console.log(call.next());
console.log(call.next());

// {value: 'hello', done: false}
// {value: 'javascript', done: false}
// {value: 'world', done: false}

//19.Create a generator function that yields five different discount messages. Print each yielded value using a for-of loop.
function* discount(){
    yield "10% discount on shirts";
    yield "15% discount on shoes";
    yield "22% discount on watches"
    yield "30% discount on Home essentials"
    yield "25% discount on Laptops"
}
for(let message of discount()){
    console.log(message);
}

// 10% discount on shirts
// 15% discount on shoes
// 22% discount on watches
// 30% discount on Home essentials
// 25% discount on Laptops

// 20.Create a generator function that yields three student names. Use a for-of loop to display them.
function* student(){
    yield "Rakshitha";
    yield "sushmitha";
    yield "priya";   
}
for(let names of student()){
    console.log(names);
    
}

// Rakshitha
//  sushmitha
//  priya


// 21.Create a generator function with four yield statements. Check the done property after the yielded values have been consumed.

function* myGenerator() {
    yield "Apple";
    yield "Mango";
    yield "Orange";
    yield "Banana";
}

let call1 = myGenerator();

console.log(call1.next());
console.log(call1.next());
console.log(call1.next());
console.log(call1.next());
console.log(call1.next());

// {value: 'Apple', done: false}
// {value: 'Mango', done: false}
// {value: 'Orange', done: false}
// {value: 'Banana', done: false}
// {value: undefined, done: true}

// 22.Create a normal function add(a, b, c) that prints the sum of three numbers.
function add1(a,b,c){
    console.log(a+b+c);

}
add1(56,86,14);    //156

// 23.Convert the add(a, b, c) function into a curried function using nested functions.
function add2(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(add2(10)(20)(30));  //60

//24. Call a curried function with values 5, 10, and 15 using this format: functionName(5)(10)(15).
function add3(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
             
        }
    }
}
add3(5)(10)(15);    //30

// 25.Create a curried function that accepts product price, discount percentage, and quantity, then calculates the total discounted price.
function calculateTotal(price){
    return function(discount){
        return function(quantity){
            let discountPrice=price-(price*discount/100)
            let total=discountPrice*quantity
            console.log(total);     //375
            
        };
    };
};
calculateTotal(100)(25)(5)

// 26.Write a normal three-parameter function and its curried equivalent. Call both with the same values and compare their results.
function sub2(a,b,c){
    return a-b-c;
}
console.log(sub2(62,30,27));    //5

function sub3(a){
    return function(b){
        return function(c){
            return a-b-c
        };
    };
};
console.log(sub3(62)(30)(27));  //5

// 27.Create an IIFE that accepts a product name and discount percentage, then displays a sale message using a template string.
(function(product,discount){
    alert(`${product} is on sale! get ${discount}%off`)
})("Refrigerator",40)

//Refrigerator is on sale! get 40%off

// 28.Create a function that returns a number. Store the returned value in a variable and print it.

function number(x){
    return x;
}
let print=number(20)
console.log(print); //20


// 29.Create a function that accepts a student's marks and returns the marks. Use the returned value in another variable.
function studentMarks(marks) {
    return marks;
}

let result1 = studentMarks(85);

console.log(result1);   //85

// 30.Create a student fee calculator using a function with a default parameter, a callback function to calculate the discount, and a return value for the final fee.


function calculateDiscount(fee) {
    return fee * 0.10; 
}

function studentFee(fee = 10000, callback) {
    let discount = callback(fee);
    let finalFee = fee - discount;

    return finalFee;
}

let result3 = studentFee(10000, calculateDiscount);

console.log("Final student fee: "+ result3);
