function externalDemo(){

    console.warn("Warning Message");

    console.error("Sample Error Message");

    console.table([
        {Name:"Shruti", PRN: 24070521148},
        {Name:"Rahul", PRN: 24070521149}
    ]);

    console.time("Execution");

    for(let i=1;i<=1000000;i++){}

    console.timeEnd("Execution");

    alert("Welcome, Shruti Bawankar! External JavaScript Executed");
}