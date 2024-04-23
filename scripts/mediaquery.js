const seperator = ' · ';

function handleMediaChange(event) {
    const location = document.getElementById('location');

    if (event.matches && location.childElementCount === 1) {
        const values = location.firstElementChild.getAttribute('data-value').split(seperator);
        location.innerHTML = '';
        values.forEach((element) => {
            const p = document.createElement('p');
            p.innerText = element;
            p.setAttribute('data-value', element);
            location.appendChild(p);
        });
    } else if (!event.matches && location.childElementCount > 1) {
        const value = Array.from(location.children).map((element) => element.getAttribute('data-value')).join(seperator);
        location.innerHTML = '';
        const p = document.createElement('p');
        p.innerText = value;
        p.setAttribute('data-value', value);
        location.appendChild(p);
    }
}

export function init() {
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaChange);
}
