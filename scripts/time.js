export const timeformat = { hour: 'numeric', minute: '2-digit', hour12: true };

function updateTime() {
    const time = document.getElementById('time');
    time.innerText = new Date().toLocaleTimeString('en-US', timeformat);
}

export function init() {
    updateTime();
    setInterval(updateTime, 1000);
}
