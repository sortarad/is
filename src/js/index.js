import A11yDialog from 'a11y-dialog';

import './../scss/style.scss';

// Needed for hot-reloading the HTML file(s)
if (process.env.NODE_ENV === 'development') {
    require('./../index.html');
}

const copyButtons = document.querySelectorAll('[data-copy-button]');

for (const button of copyButtons) {
    button.addEventListener('click', () => {
        const text = button.getAttribute('data-copy-button');

        navigator.clipboard.writeText(text).then(() => (button.innerText = 'Copied to clipboard!'));
    });
}

// Overlay
const overlays = document.querySelectorAll('.overlay');

for (const overlay of overlays) {
    new A11yDialog(overlay);
}
