function handleMediaChange(event) {
    const location = document.getElementById('location');
    const seperator = document.getElementById('seperator');

    location.style.flexDirection = event.matches ? 'column' : 'row';
    seperator.style.display = event.matches ? 'none' : 'block';
}

export function init() {
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaChange);
}
