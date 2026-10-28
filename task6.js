//1. Create an array of 10 numbers and use forEach() to print each number.
let num=[10,20,30,40,50,60,70,80,90,100]

num.forEach((curr,ind,totalno) => {
    console.log(curr);
    
});

//10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
// 100

//2. Create an array of numbers and use map() to create a new array where every number is multiplied by 5.
let arr=[5,7,6,4,3,8,1]
let newMap=arr.map((curr)=>{
    return curr*5;
})
console.log((newMap));
//(7) [25, 35, 30, 20, 15, 40, 5]

// 3. Given an array of numbers, use filter() to get only numbers greater than 20.
arr=[
    {num:52},
    {num:7},
    {num:12},
    {num:2},
    {num:28},
    {num:31},
    {num:46},
    {num:18}
]
let newFilter=arr.filter((curr)=>{
    return curr.num>20;   
})
console.log(newFilter);

// {num: 52}
// {num: 31}
// {num: 46}
// length:4

//4. Create an employee array containing name and salary. Use filter() to display employees whose salary is less than or equal to ₹300,000.

let employee=[
    {name:"deepthi",salary:350000},
    {name:"varshitha",salary:400000},
    {name:"sushmitha",salary:300000},
    {name:"theju",salary:250000},
    {name:"priya",salary:100000},
]
let employeee=employee.filter((curr)=>{
    return curr.salary<=300000
})
console.log(employeee);


// 0:{name: 'sushmitha', salary: 300000}
// 1:{name: 'theju', salary: 250000}
// 2: {name: 'priya', salary: 100000}
// length:3

//5. Using the same employee array, use find() to get the first employee whose salary is greater than ₹200,000.
let newFind=employee.find((curr,ind,tot)=>{
    return curr.salary<=200000
})
console.log(newFind);

//{name: 'priya', salary: 100000}

//6. Use reduce() to calculate the total of all numbers in an array.
arr=[245,67,22,94,52,76]
let newReduce=arr.reduce((acc,cur,ind,tot)=>{
    return acc+cur
},0)
console.log(newReduce);
//556

//7. Create an array of numbers and use some() to check whether at least one number is even.
arr=[245,67,22,94,52,76]
let newSome=arr.some((c,i,t)=>{
    return c%2==0
});
console.log(newSome);
//true

//8. Use every() to check whether all numbers in an array are greater than zero.
arr=[4,7,12,24,35,0,6]
let newEvery=arr.every((c,i,t)=>{
    return c>0
})
console.log(newEvery);  //false

// 9. Given an array of numbers, sort them in ascending order using the sort callback.
arr=[6, 9, 94, 22,56, 502]
let newSort=arr.sort((a,b)=>{
    return a-b
})
console.log(newSort);

//(6) [6, 9, 22, 56, 94, 502]

// 10. Given an array of numbers, sort them in descending order using sort() and (a, b) => b - a.
arr=[25,67,22,94,5,7]

let newSort1=arr.sort((a,b)=>{
    return b-a
})
console.log(newSort1);
//(6) [94, 67, 25, 22, 7, 5]

// 11. Create a string "javascript" and print the character at index 4 using charAt()
let str="javascript"
console.log(str.charAt(4));
//s

// 12. Find the character code at index 2 using charCodeAt().
str="javascript"
console.log(str.charCodeAt(2));
//118

// 13. Create a string with spaces at the beginning and end. Remove the extra spaces using trim().
str=" welcome javascript "
console.log(str.trim());
//welcome javascript

// 14. Convert a string to uppercase and lowercase using the appropriate methods.
str="SuShmiThA"
console.log(str.toUpperCase());     //SUSHMITHA
console.log(str.toLowerCase());     //sushmitha

//15. Check whether a string contains "script" using includes().
str="javascript"
console.log(str.includes("script"));    //true

//16. heck whether a string starts with "Java" and ends with "Script" using the appropriate methods.
str="Javascript"
console.log(str.startsWith("Java"));    //true
console.log(str.endsWith("Script"));    //false

// 17. Replace every occurrence of "java" with "python" in a string using replaceAll().
str="javascript"
console.log(str.replaceAll("java","python"));   //pythonscript

// 18. Split the string "html-css-javascript-react" into an array using split().
str="html-css-javascript-react"
console.log(str.split("-"));

//(4) ['html', 'css', 'javascript', 'react']

//19. Convert an array of names into a single string using join() with a comma separator.
let names=["Sushma","Priya","Rakshi","Divya"]
console.log(names.join(","));
// Sushma,Priya,Rakshi,Divya

//20. Create a string and extract a portion of it using slice().
str="javascript"
console.log(str.slice(4));
//script

// 21. Create a Date object and print the current year, month, date, and day.
let date=new Date();
console.log(date.getFullYear(),date.getMonth(),date.getDate(),date.getDay());
//2026 9 28 3

// 22. Create an array containing all 12 month names. Use getMonth() to display the current month name.
let months=["jan","feb","march","apr","may","june","july","aug","sep","oct","nov","dec"];
let today=new Date();
let monthIndex = today.getMonth();

console.log(months[monthIndex]);    //oct

// 23. Print the current hours, minutes, and seconds using the appropriate date methods.
let time=new Date()
console.log(time.getHours());9
console.log(time.getMinutes());19
console.log(time.getSeconds());48

// 24. Create a date object and change its year to 2003, month to January, and date to 30 using the setter methods.
let day=new Date();
day.setFullYear(2003,1,30)
console.log(day.toDateString());
//Sun Mar 02 2003

// 25. Use setTimeout() to print "Welcome to JavaScript" after 3 seconds.
setTimeout(()=>{
    console.log("Welcome to JavaScript");
    
},3000);
//Welcome to JavaScript

// 26. Use setInterval() to print "Learning JavaScript" every 2 seconds.
let interval=setInterval(()=>{
    console.log("Learning JavaScript");
    
},2000);
// Learning JavaScript

setTimeout(()=>{
    clearInterval(interval)
},8000);

// 28. Create three functions named one(), two(), and three(). Call them in this order: one(), setTimeout(two, 0), and three(). Observe the output order.
function one(){
    console.log("one");
    
}
function two(){
    console.log("two");
    
}

function three(){
    console.log("three");
    
}
one()
setTimeout(two,0)
three()
// one
// three
// two

// 29. Create a Promise that resolves with the message "Login successful" and display the result using .then()
let login =new Promise((resolve)=>{
    resolve("Login successful");
    
})
login.then((message)=>{
    console.log(message);
}
);
//Login successful
console.clear()

// 30. Create a Promise that rejects with "Invalid password" and handle the error using .catch().

let login1 = new Promise((resolve, reject) => {
    reject("Invalid password");
});

login1.catch((error) => {
    console.log(error);
});

//Invalid password

//31. Create a Promise and use .finally() to print "Process completed" regardless of whether it resolves or rejects.
let login2 = new Promise((resolve, reject) => {
    resolve();
});

login2.finally(() => {
    console.log("Process completed");
});
//Process completed

//32. Fetch product data from the Fake Store API:
// https://fakestoreapi.com/products
// Convert the response to JSON and print all product titles using forEach().

let api= "https://fakestoreapi.com/products"
fetch(api).then((response)=>{
    return response.json()
    
})
.then((json)=>{
    json.forEach((curr,ind,tot)=>{
    console.log(curr.title);
}) 
})

// 33. Fetch the API and print the title, price, and category of every product.
api= "https://fakestoreapi.com/products"
fetch(api).then((response)=>{
    return response.json()
    
})
.then((json)=>{
    json.forEach((curr,ind,tot)=>{
    console.log(curr.title);
    console.log(curr.price,);
    console.log(curr.category);
})  
})
console.clear();


// 34. Handle API errors using .catch() and display the error message using console.warn().
let api1= "https://fakestoreapi.com/products"
fetch(api1).then((response)=>{
    return response
    
})
.catch((error)=>{
    console.warn(error.message);
}) 

// 35. Use .finally() to print "API call completed" after the fetch process.

api1 = "https://fakestoreapi.com/products";

fetch(api1)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.warn(error.message);
})
.finally(() => {
    console.log("API call completed");  //API call completed
});

// 36. Employee salary report: Create an array of employee objects. Use filter() to select employees earning less than ₹300,000, then use forEach() to print their names and salaries.
let employees = [
    { name: "Sushmitha", salary: 250000 },
    { name: "Priya", salary: 350000 },
    { name: "Rakshi", salary: 200000 },
    { name: "Sneha", salary: 400000 }
];

let result = employees.filter((employee) => {
    return employee.salary < 300000;
});

result.forEach((employee) => {
    console.log("Name:", employee.name);
    console.log("Salary:", employee.salary);
});

// Name: Sushmitha
// Salary: 250000
// Name: Rakshi
// Salary: 200000

// 37. Product price calculator: Fetch products from the Fake Store API and use map() to create a new array containing only product titles and prices.
fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        let result = products.map((product) => {
            return {
                title: product.title,
                price: product.price
            };
        });

        console.log(result);
    })
    .catch((error) => {
        console.warn(error.message);
    });

// 38. Product search: Fetch products and use filter() to display products belonging to a category you choose.
fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        let result = products.filter((product) => {
            return product.category === "electronics";
        });

        console.log(result);
    })
    .catch((error) => {
        console.warn(error.message);
    });

// 39. Number analysis: Given an array of numbers, use map(), filter(), reduce(), some(), and every() to perform different calculations and checks.
let numbers = [10, 20, 30, 40, 50];

// 1. map() - Multiply each number by 2
let map = numbers.map((num) => num * 2);
console.log("Map:", map);   //(5) [20, 40, 60, 80, 100]

// 2. filter() - Select numbers greater than 25
let filter = numbers.filter((num) => num > 25);
console.log("Filter:", filter); //(3) [30, 40, 50]

// 3. reduce() - Calculate the total
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Reduce:", total);  //150

// 4. some() - Check whether any number is greater than 40
let hasGreater = numbers.some((num) => num > 40);
console.log("Some:", hasGreater);   //true

// 5. every() - Check whether all numbers are greater than 5
let allGreater = numbers.every((num) => num > 5);
console.log("Every:", allGreater);  //true


// 40. Product listing: Fetch the Fake Store API data, convert the response to JSON, and print the title, price, and category of each product. Handle errors with .catch() and print a completion message with .finally().

// 40. Product listing using Fetch API, catch() and finally()

api = "https://fakestoreapi.com/products";

fetch(api)
.then((response) => {
    return response.json();
})
.then((data) => {
    data.forEach((product) => {
        console.log("Title:", product.title);
        console.log("Price:", product.price);
        console.log("Category:", product.category);
    });
})
.catch((error) => {
    console.warn(error.message);
})
.finally(() => {
    console.log("API call completed");  //API call completed
});
