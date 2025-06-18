const clock = document.getElementById('clock');

const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    clock.innerHTML = `<h2 id='time' style="opacity: 0; transition: opacity 0.5s;">${time}</h2>`;
    setTimeout(() => {
        document.getElementById('time').style.opacity = 1;
    }, 50);
};

updateTime(); // Show time immediately
const intervalId = setInterval(updateTime, 1000);
