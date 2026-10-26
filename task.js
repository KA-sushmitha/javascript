// 1.task

let tasks=[
    {
        id:1,
        name:"javascript practice",
        status:"pending",
        deadline:new Date("2026-10-27")
    },
    {
        id:2,
        name:"array methods",
        status:"completed",
        deadline:new Date("2026-10-21")
    },
    {
        id:3,
        name:"project",
        status:"pending",
        deadline:new Date("2026-10-26")
    }

];

// 2.date and time

let today=new Date();
console.log("current date:",today.getDate(),"-",today.getMonth()+1,"-",today.getFullYear());
console.log("Current Time:",today.getHours(),":",today.getMinutes(),":",today.getSeconds());
console.log("Year:", today.getFullYear());

// date manipulation

let futureDate=new Date();
futureDate.setDate(futureDate.getDate()+7);
console.log("Date After 7 Days:", futureDate.toLocaleDateString());

// display task
console.log("---All Task---");
tasks.forEach(tasks =>{
    console.log(tasks.id,tasks.name,tasks.status)
    
});

// 4.map()
console.log("--- TASK NAMES ---");
console.log(tasks.map(tasks=>tasks.name.toUpperCase()));

// 5.filter()
console.log("--- PENDING TASKS ---");
console.log((tasks.filter( tasks=> tasks.status==="pending")));

//6.find()
console.log("----FIND TASK----");
console.log(tasks.find(tasks=>tasks.id===1));

// 8.reduce()
console.log("--- TOTAL TASKS ---");
console.log(tasks.reduce((total,tasks)=>total+1,0));

//9.sort()
console.log("--- SORT BY DEADLINE ---");
console.log([...tasks].sort((a,b)=>a.deadline-b.deadline));

// 10.every()
console.log("ALL TASKS COMPLETED:",tasks.every(tasks=>tasks.status==="completed"));

//11.add task
tasks.push({
    id:4,
    name:"learn date methods",
    status:"completed",
    deadline:new Date("2026-10-30")
});
console.log("After Adding:", tasks);

// 12. update task 
tasks=tasks.map(tasks=>tasks.id=1?{...tasks,status:"completed"}:task);

console.log("after updating:",tasks);


// 13. Delete a Task

tasks=tasks.filter(task => task.id!==2);
console.log("after delete:",tasks);

console.log("----final---");
console.log("total tasks:",tasks.length);

console.log("completed:",tasks.filter(tasks=>tasks.status==="completed").length);

console.log("Pending:",
tasks.filter(task => task.status === "Pending").length
);











