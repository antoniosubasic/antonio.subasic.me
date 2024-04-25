import { init as initTime } from './time.js';
import { init as initMediaquery } from './mediaquery.js';
import { init as initAnimation } from './animation.js';
import { init as initEmail } from './email.js';

document.addEventListener('DOMContentLoaded', () => {
    const location = document.getElementById('location');
    document.getElementById('city').innerText = location.getAttribute('data-city');
    document.getElementById('coordinates').innerText = location.getAttribute('data-coordinates');

    const email = document.getElementById('email');
    document.getElementById('hover-message').innerText = email.getAttribute('data-email');

    initTime();
    initMediaquery();
    initAnimation();
    initEmail();
});