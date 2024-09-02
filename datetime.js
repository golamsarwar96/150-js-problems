// Get current date and time 
let today = new Date();

// Get the day of the week. getDay() returns an index from 0-6, where 0 is sunday

let day = today.getDay();

// An array to list name of the week and get the day using the index of getDate();

let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//Printing which day
console.log("Today is: " + dayName[day] + ".");

//Get Hours, Minute & Second
let hour = today.getHours();
let minute = today.getMinutes();
let seconds = today.getSeconds();


// //Print Time
// console.log("Time : "+ hour + " : " + minute + ": " + seconds);


//Second Part
//Convert it to 12 hour format
let convert12Hour = (hour>=12)? "PM" : "AM";

//Special Case when hour is 0
if(hour===0 && convert12Hour==="PM"){
    if(minute===0 && seconds===0){
        hour = 12;
        convert12Hour = "Noon";
    }
    else{
        hour = 12;
        convert12Hour = "PM";
    }
}

//Special Case when hour is 0
if(hour===0 && convert12Hour==="AM"){
    if(minute===0 && seconds===0){
        hour = 12;
        convert12Hour = "Midnight";
    }
    else{
        hour = 12;
        convert12Hour = "AM";
    }
}

//Printing time with AM / PM and 12 hour format
console.log("Time : "+ hour + " : " + minute + ": " + seconds + " " +convert12Hour);