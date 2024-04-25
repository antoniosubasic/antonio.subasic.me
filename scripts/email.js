let mouseOver = false;
let copied = false;

function handleClick(button) {
    button.addEventListener('click', () => {
        copied = true;

        if (mouseOver) {
            const hoverMessage = document.getElementById('hover-message');
            hoverMessage.style.opacity = '0';
            setTimeout(() => {
                hoverMessage.style.display = 'none';
            }, 200);
            mouseOver = false;
        }

        navigator.clipboard.writeText(document.getElementById('email').getAttribute('data-email')).then(() => {
            const copyMessage = document.getElementById('copy-message');
            copyMessage.style.top = `calc(${button.offsetTop}px + 1.5rem)`;
            copyMessage.style.display = 'flex';

            setTimeout(() => {
                copyMessage.style.opacity = '1';
            }, 50);

            setTimeout(() => {
                copyMessage.style.opacity = '0';
                setTimeout(() => {
                    copyMessage.style.display = 'none';
                    copied = false;
                }, 200);
            }, 2000);
        }, () => {
            console.error('failed to copy email address');
        });
    });
}

function handleHover(button) {
    button.addEventListener('mouseenter', () => {
        if (!copied) {
            mouseOver = true;
            const hoverMessage = document.getElementById('hover-message');
            hoverMessage.style.top = `calc(${button.offsetTop}px + 1.5rem)`;
            hoverMessage.style.display = 'block';
            setTimeout(() => {
                hoverMessage.style.opacity = '1';
            }, 50);
        }
    });

    button.addEventListener('mouseleave', () => {
        mouseOver = false;
        const hoverMessage = document.getElementById('hover-message');
        hoverMessage.style.opacity = '0';
        setTimeout(() => {
            hoverMessage.style.display = 'none';
        }, 200);
    });
}

export function init() {
    const emailButton = document.querySelector('#email img[alt="Email"]');

    handleClick(emailButton);
    handleHover(emailButton);
}
