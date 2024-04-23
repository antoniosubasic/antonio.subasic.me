import { init as initTime } from './time.js';
import { init as initMediaquery } from './mediaquery.js';
import { init as initAnimation } from './animation.js';

document.addEventListener('DOMContentLoaded', () => {
    initTime();
    initMediaquery();
    initAnimation();
});
