let today = new Date();

let day = today.getDate();

//month is 0 based
let month = today.getMonth() + 1;

let year = today.getFullYear();

//adding a zero before day
if(day<10){
    day = "0" + day;
}

//adding a zero before month
if(month<10){
    month = "0" + month;
}

let date1 =  day + "/" + month + "/" + year; // 03/09/2024
let date2 =  day + "-" + month + "-" + year; // 09/03/2024

let date3 =  month + "/" + day + "/" + year; // 03-09-2024
let date4 =  month + "-" + day + "-" + year; // 09-03-2024

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);