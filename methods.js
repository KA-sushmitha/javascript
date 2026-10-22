// 1. Create an array of 5 fruits. Add 3 fruits at the end using push() and print the array.
let fruits=["Mango","Orange","Banana","Avacado","DragonFruit"]
fruits.push("jackfruit","Pineapple","Straberry")
console.log(fruits);

//['Mango', 'Orange', 'Banana', 'Avacado', 'DragonFruit', 'jackfruit', 'Pineapple', 'Straberry']

// 2. Create an array of 6 numbers. Remove the last element using pop() and print the result.
let numbers=[1,11,21,31,41,51]
numbers.pop()
console.log(numbers);
//[1, 11, 21, 31, 41]

//3. Create an array of 5 names. Remove the first element using shift() and print the array.
let names=["Rakshi","Sushma","Priya","Divya","Shamanth"]
names.shift()
console.log(names);
//['Sushma', 'Priya', 'Divya', 'Shamanth']

// 4.Create an array of 4 numbers. Add two numbers at the beginning using unshift().
let num=[103,104,105,106]
num.unshift(101,102)
console.log(num);
//[101, 102, 103, 104, 105, 106]

//5. Given let arr = [10, 20, 30, 40, 50], remove 2 elements starting from index 1 using splice().
let arr = [10, 20, 30, 40, 50]
arr.splice(1,2)
console.log(arr);
// [10, 40, 50]

// 6. Given let arr = [1, 2, 3, 4, 5], replace the value 3 with 100 using splice().
let arr1 = [1, 2, 3, 4, 5]
arr1.splice(2,1,100)
console.log(arr1);
//[1, 2, 100, 4, 5]

//7. Create an array of 5 numbers and use fill() to replace the elements from index 2 to index 4 with "hello".
let numb=[501,502,503,504,505]
numb.fill("hello",2,5)
console.log(numb);
//[501, 502, 'hello', 'hello', 'hello']

//8. Create two arrays of numbers and combine them using concat().
let a=[11,12,13,14,15]
let b=[16,17,18,19,20]
let merge=a.concat(b)
console.log(merge);
// [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//9. Given let arr = [10, 20, 30, 40, 50, 60], extract elements from index 1 to index 4 using slice()
let arr2 = [10, 20, 30, 40, 50, 60]
let extract=arr2.slice(1,5)
console.log(extract);
// [20, 30, 40, 50]

//10. Create a nested array and convert it into a single-level array using flat(Infinity).
let x=[1,2,[3,4,5,[6,7],[8]]]
let singlearr=x.flat(Infinity)
console.log(singlearr);
//[1, 2, 3, 4, 5, 6, 7, 8]

// 11. Given let arr = [10, 20, 30, 40, 50], check whether the value 30 exists using includes()
let arr3 = [10, 20, 30, 40, 50]
let exist=arr3.includes(30)
console.log(exist);
//true

// 12. Given let arr = [5, 10, 15, 20, 25], find the index of 20 using indexOf().
let arr4 = [5, 10, 15, 20, 25]
let ind=arr4.indexOf(20)
console.log(ind);       //3

//13. Given let arr = [1, 2, 3, 2, 1, 2], find the last index of 2 using lastIndexOf().
let arr5 = [1, 2, 3, 2, 1, 2]
let lastind=arr5.lastIndexOf(2)
console.log(lastind);       //5

//14. Create an array of numbers and arrange its elements using sort().
let number=[34,67,24,88,56,69,93]
number.sort()
console.log(number);
//[24, 34, 56, 67, 69, 88, 93]

//15. Create an array of 7 numbers and reverse the order using reverse().
let integer=[1,2,3,4,5,6,7]
integer.reverse()
console.log(integer);
//[7, 6, 5, 4, 3, 2, 1]

//16. Create two arrays containing 4 numbers each. Merge them into one array using the spread operator.
let num1=[21,22,23,24]
let num2=[25,26,27,28]
let merge1=[...num1, ...num2]
console.log(merge1);
// [21, 22, 23, 24, 25, 26, 27, 28]

//17. Create two objects: one containing student details and another containing job details. Merge both objects using the spread operator.
let studentDetail={
    name:"Sushmitha",
    age:23
};

let jobDetail={
    role:"FullStack Java devloper",
    experince:"Fresher"
};
let mergeObject={...studentDetail, ...jobDetail}
console.log(mergeObject);

//18. Create a function that accepts two parameters and uses the rest operator to collect all remaining arguments into an array.
function users(FirstName,LastName, ...otherdetails){
    console.log(FirstName,LastName);
    console.log(otherdetails);
}
users("Priya","K A",21,"BCA","Mandavya college")

//Priya K A
//[21, 'BCA', 'Mandavya college']

//19. Write a function using function one(a, b, ...c) that prints the sum of a, b, c[0], and c[1].
function one(a,b, ...c){
    console.log(a+b+c[0]+c[1]);
    
}
one(20,43,2,7)
//sum=72

//20. Create two arrays and use the spread operator to copy all elements from the first array into a new array.
let array1=["Banana","Mango","Grapes"];
let array2=["Avacado","jackfruit","Apple"];
let newarray=[...array1]
console.log(newarray);
// ['Banana', 'Mango', 'Grapes']

//21. Given let arr = [10, 20, 30, 40], extract all four values into separate variables using array destructuring.
let arr6 = [10, 20, 30, 40];

let [a1,b1,...c1]=arr6
console.log(a1);
console.log(b1);
console.log(...c1);
// 10
// 20
// 30 40


//  22.Given let nested = [1, 2, [3, 4, [5, 6]]], extract the values 1, 2, 3, 4, 5, and 6 using nested destructuring.
let nested = [1, 2, [3, 4, [5, 6]]];

let [n1,n2,[n3,n4,[n5,n6]]]=nested;
// console.log(n1); //1
// console.log(n2); //2
// console.log(n3); //3
// console.log(n4); //4
// console.log(n5); //5
// console.log(n6); //6
console.log(n1,n2,n3,n4,n5,n6);
//1 2 3 4 5 6

// 23. Create an array containing a student's name, age, and CGPA. Extract these values using destructuring and print them.
let student=["Sushmitha",23,8.02]
let [name,age,cgpa]=student
console.log(name);
console.log(age);
console.log(cgpa);
//Sushmitha
// 23
// 8.02




//24. Create an object containing name, role, and location. Extract these properties using object destructuring.
let details={
    name1:"Sushmitha",
    role:"FullStack Java devloper",
    location1:"Bengaluru"
}
let {name1,role,location1}=details
console.log(name);
console.log(role);
console.log(location1);
console.log(name1,role,location1);

// Sushmitha
// FullStack Java devloper
// Bengaluru
//Sushmitha FullStack Java devloper Bengaluru




//25. Create an object containing a student's name and a nested address object with city and state. Extract the city and state using nested object destructuring.
let stud={
    studentName:"Sushmitha",
    address:{
        city:"Bengaluru",
        state:"karnataka"
    }
}
let {studentName,address:{city,state}}=stud
console.log(city,state);
console.log("city:",city);
console.log("state:",state);

// Bengaluru karnataka
// city: Bengaluru
// state: karnataka

// 26. Given an object with name, role, and location: { mainLocation, currentLocation }, print all four values using destructuring.
let employee={
    name2:"priya",
    role2:"Developer",
    location:{
        mainLocation:"salem",
        currentLocation :"bengaluru"
    }
};
let {name2,role2,location:{mainLocation,currentLocation}}=employee
console.log(name2,role2,currentLocation,mainLocation);
//priya Developer bengaluru salem

//27. Create an array of 10 numbers. Remove the first and last elements, add two new numbers at the beginning, and print the final array.
let arrnum=[10,20,30,40,50,60,70,80,90,100]
arrnum.pop()
arrnum.shift()
arrnum.unshift(101,102)
console.log(arrnum);
//[101, 102, 20, 30, 40, 50, 60, 70, 80, 90]

//28. Create an array containing duplicate numbers. Use includes(), indexOf(), and lastIndexOf() to check and print information about one selected number.
let duplicate=[20,44,5,1,3,66,73,3,62,5,3,44]
console.log( duplicate.includes(5));    //true
console.log(duplicate.indexOf(5));      //2
console.log(duplicate.lastIndexOf(5));  //9

//29. Create two objects containing employee information. Merge them using the spread operator, then destructure and print the employee's name and role.
let employee1 = {
    name3: "Sushmitha",
    age: 22
};
let employee2 = {
    role3: "Developer",
    location: "Bengaluru"
};
let employe={...employee1,...employee2}
let {name3,role3}=employe
console.log(name3,role3);
//Sushmitha Developer


//30. Create a nested array containing numbers. Flatten it using flat(Infinity), reverse the resulting array, and print the final result.
let numbers1 = [10, [20, 30], [40, [50, 60]], 70];
let flattened = numbers1.flat(Infinity);
flattened.reverse();
console.log(flattened);
//[70, 60, 50, 40, 30, 20, 10]

