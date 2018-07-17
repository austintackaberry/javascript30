const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const clockSetter = () => {
    let currentDate = new Date(new Date().getTimezoneOffset() + Date.now());
    let hours = currentDate.getHours() + 3;
    let mins = currentDate.getMinutes() + 15;
    let seconds = currentDate.getSeconds() + 15;
    seconds = seconds > 60 ? seconds - 60 : seconds;
    mins = mins > 60 ? mins - 60 : mins;
    hours = hours > 24 ? hours - 12 : hours;
    hours = hours > 12 ? hours - 12 : hours;

    secondHand.style.transform = "rotate(" + seconds / 60 + "turn)";
    minHand.style.transform = "rotate(" + mins / 60 + "turn)";
    hourHand.style.transform = "rotate(" + hours / 12 + "turn)";
    return setTimeout(clockSetter, 1000);
};

clockSetter();
