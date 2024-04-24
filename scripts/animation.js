import { timeformat } from './time.js';

const duration = 1000;

function animate(element, value) {
    let interval = null;
    let iteration = 0;

    interval = setInterval(() => {
        element.innerText = element.innerText
            .split('')
            .map((_, index) => {
                return index < iteration
                    ? value[index]
                    : String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            })
            .join('');

        if (iteration >= value.length) {
            clearInterval(interval);
        }

        iteration++;
    }, duration / value.length);
}

export function init() {
    const location = document.getElementById('location');

    animate(document.getElementById('city'), location.getAttribute('data-city'));
    animate(document.getElementById('coordinates'), location.getAttribute('data-coordinates'));
    animate(document.getElementById('time'), new Date().toLocaleTimeString('en-US', timeformat));
}
