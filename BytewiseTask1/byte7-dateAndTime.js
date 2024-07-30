console.log("This is date and time tutorial");
let now = new Date();
console.log(now);

// it is the miliseconds argument which gives date according seconds passed since 1970
let dt = new Date(0);
console.log(dt);

let newDate = new Date("2004-02-27");
console.log(newDate);

// let datePattern = new Date(year,month,date,hours,minutes,seconds,milliseonds);
let datePattern = new Date(2024,0,20,2,3,45,11);
console.log(datePattern);

let yr = datePattern.getFullYear();
console.log("Year : " + yr);

let dte = datePattern.getDate();
console.log("Date : " + dte);

let month = datePattern.getMonth();
console.log("Month : " + month);

let day = datePattern.getDay();
console.log("Day : " + day);

let hours =  datePattern.getHours();
console.log("Hours : " + hours);

let seconds = datePattern.getSeconds();
console.log("Seconds : "+seconds);

datePattern.setDate(32);
console.log(datePattern);

datePattern.setSeconds(20);
datePattern.setFullYear(2001);
datePattern.setHours(3);
console.log(datePattern);

function tu(){
let t = new Date()
console.log(t);
document.getElementById('time').innerHTML = t;
}
setInterval(tu,1000);

