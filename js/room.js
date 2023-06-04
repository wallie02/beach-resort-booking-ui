// back to scroll
let scrollBtn = document.getElementById('backToTop');
function scrollUp(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollBtn.addEventListener('click',scrollUp);

window.addEventListener('scroll', ()=> {
    scrollBtn.classList.toggle('scroll-fadeOut', window.scrollY > 100)
})




// date
// function displayDate(){
//     const dayName = ["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,"];
//     const monthName = ["January-","February-","March-","April-","May-","June-","July-","August-","September-","October- ","November-","December-"];
 
//     let todayDate = new Date();

//     // return date with array loop as index number;
//     const indexDate = [dayName[todayDate.getDay()], todayDate.getDate(), monthName[todayDate.getMonth()], todayDate.getFullYear()];
//     // span id 
//     const dateID = ["day-name", "day-num", "month", "year"];
//     for (let i = 0; i < dateID.length; i++) {
//        document.getElementById(dateID[i]).firstChild.nodeValue = indexDate[i];   
//     }
// }

// displayDate();

// // Time
// function displayTime(){
//     let currentTime = new Date();
//     document.getElementById('time-show').innerText = currentTime.toLocaleTimeString('en-US',{hour: '2-digit', minute:'2-digit'});
//     setTimeout(displayTime,1000);
// }

// displayTime();