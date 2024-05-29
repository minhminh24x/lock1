function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formatTime = (time) => time < 10 ? `0${time}` : `${time}`;

    const hourText = `${formatTime(hours % 12)} ${formatTime(hours % 12)} ${formatTime(hours % 12)} ${formatTime(hours % 12)} ${formatTime(hours % 12)}`;
    const minuteText = `${formatTime(minutes)} ${formatTime(minutes)} ${formatTime(minutes)} ${formatTime(minutes)} ${formatTime(minutes)}`;
    const secondText = `${formatTime(seconds)} ${formatTime(seconds)} ${formatTime(seconds)} ${formatTime(seconds)} ${formatTime(seconds)}`;

    const hourDeg = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30);
    const minuteDeg = (minutes / 60) * 360 + ((seconds / 60) * 6);
    const secondDeg = (seconds / 60) * 360;

    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    hourHand.setAttribute('data-time', hourText);
    minuteHand.setAttribute('data-time', minuteText);
    secondHand.setAttribute('data-time', secondText);
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately
