function handleClick(button) {
    const emailButton = document.querySelector('#email img[alt="Email"]');

    emailButton.addEventListener('click', () => {
        navigator.clipboard.writeText(document.getElementById('email').getAttribute('data-email')).then(() => {
            const copyMessage = document.getElementById('copy-message');
            copyMessage.style.top = `calc(${emailButton.offsetTop}px + 1.5rem)`;
            copyMessage.style.display = 'flex';

            setTimeout(() => {
                copyMessage.style.opacity = '1';
            }, 50);

            setTimeout(() => {
                copyMessage.style.opacity = '0';

                setTimeout(() => {
                    copyMessage.style.display = 'none';
                }, 200);
            }, 2000);
        }, () => {
            console.error('failed to copy email address');
        });
    });
}

export function init() {
    handleClick();
}
