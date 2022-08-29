const monthIndex = new Date().getMonth()
const currentDay = new Date().getDate()
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate(); // 0 gets the last day of the previous month
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() -1; // JS starts the day at sunday so we need a -1 here

const MonthEl = document.querySelector(".date h1")
const FullDateEl = document.querySelector(".date p")
const DaysEl = document.querySelector(".days")


const months = [
    "January", 
    "Febuary", 
    "March", 
    "Aprlil", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October",
    "November",
    "December"];


console.log(firstDay)
let days = "";

for (let i = firstDay; i>0; i--){
    days += `<div class="empty"></div>`
}
for (let i = 1; i <= lastDay; i++) {
    days += `<div class="${i == currentDay ? "today" : ""}">${i}</div>`
}

MonthEl.innerHTML = months[monthIndex]
FullDateEl.innerHTML = new Date().toDateString()
DaysEl.innerHTML = days;
