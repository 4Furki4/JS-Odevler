let theName = document.getElementById("myName");

theName.innerHTML = prompt("Lütfen isminizi giriniz!")

function showTime(){
let date = new Date();
let hour = date.getHours();
let mins = date.getMinutes();
let sec = date.getSeconds();
let arrayOfWeek = ["Pazartesi","Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
mins = checkTime(mins);
sec = checkTime(sec);
let today = arrayOfWeek[date.getDay()];
document.getElementById("day").innerHTML =`Günlerden ${today} ve`;
let myClock = document.getElementById("myClock");
myClock.innerHTML = `${hour}.${mins}.${sec}`

}
setInterval(showTime,100);


function checkTime(i){
if(i<10){i="0"+i;}
return i
}