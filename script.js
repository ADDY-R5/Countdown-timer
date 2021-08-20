const daysC1 = document.getElementById('days');
const hoursC1 = document.getElementById('hours');
const minsC1 = document.getElementById('mins');
const secondsC1 = document.getElementById('seconds');

const newYears= '1 JAN 2022';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate)/1000;

    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600)%24;
    const minutes = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;
    
    console.log(days, hours, minutes, seconds);

    daysC1.innerHTML = days;
    hoursC1.innerHTML = formatTime(hours);
    minsC1.innerHTML = formatTime(minutes);
    secondsC1.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);