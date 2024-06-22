const duration = 1000;

export function animate(element: HTMLElement, value: string) {
    let interval: NodeJS.Timeout | undefined = undefined;
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