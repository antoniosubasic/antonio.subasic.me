import { timeformat } from './time.js';

const duration = 880;

function animate(element, value = null) {
    if (!value) {
        value = element.getAttribute('data-value');
    }

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
    Array.from(document.getElementById('location').children).forEach((element) => animate(element));
    animate(document.getElementById('time'), new Date().toLocaleTimeString('en-US', timeformat));
}
