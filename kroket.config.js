const colors = {
    white: '#fff',
    light: '#bbc9be',
    dark: '#111c13',
    primary: '#fa605c',
};

const fonts = {
    base: '"HK Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    headings:
        '"HK Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const baseSize = 20;

const sizes = {
    100: 0.42,
    200: 0.56,
    300: 0.75,
    400: 1,
    500: 1.33,
    600: 1.77,
    700: 2.36,
    800: 3.15,
    900: 4.2,
    1000: 5.6,
};

Object.keys(sizes).map((key) => {
    sizes[key] = Math.round(baseSize * sizes[key]) + 'px';
});

module.exports = {
    outputPath: {
        sass: {
            config: 'src/scss/_config.scss',
            utilities: 'src/scss/utilities/_kroket.scss',
        },
    },
    items: {
        color: {
            items: colors,
            output: ['sass'],
        },
        size: {
            items: sizes,
            output: ['sass'],
        },
    },
    breakpoints: {
        sm: '(min-width: 32em)',
        md: '(min-width: 48em)',
        lg: '(min-width: 68em)',
    },
    utilities: {
        bg: {
            items: colors,
            output: 'standard',
            property: 'background',
        },
        color: {
            items: colors,
            output: 'standard',
            property: 'color',
        },
        z: {
            items: {
                default: 0,
                overlay: 1,
            },
            output: 'standard',
            property: 'z-index',
        },
        font: {
            items: fonts,
            output: 'standard',
            property: 'font-family',
        },
        'flow-space': {
            items: sizes,
            output: 'responsive',
            property: '--flow-space',
        },
        shadow: {
            items: {
                base:
                    '0 0.3px 0.2px rgba(0, 0, 0, 0.025), 0 0.8px 0.5px rgba(0, 0, 0, 0.03), 0 1.5px 0.9px rgba(0, 0, 0, 0.033), 0 2.7px 1.6px rgba(0, 0, 0, 0.036), 0 5px 2.9px rgba(0, 0, 0, 0.039), 0 12px 7px rgba(0, 0, 0, 0.05)',
                heavy:
                    '0 0.7px 0.3px rgba(0, 0, 0, 0.025), 0 1.7px 0.7px rgba(0, 0, 0, 0.03), 0 3.1px 1.4px rgba(0, 0, 0, 0.033), 0 5.6px 2.5px rgba(0, 0, 0, 0.036), 0 10.4px 4.6px rgba(0, 0, 0, 0.039), 0 25px 11px rgba(0, 0, 0, 0.05)',
            },
            output: 'standard',
            property: 'box-shadow',
        },
        radius: {
            items: {
                normal: '10px',
                large: '20px',
                full: '100%',
            },
            output: 'standard',
            property: 'border-radius',
        },
        leading: {
            items: {
                flat: '1',
                tight: '1.3',
                mid: '1.5',
                loose: '1.7',
            },
            output: 'standard',
            property: 'line-height',
        },
        measure: {
            items: {
                full: '100vw',
                long: '70rem',
                medium: '55rem',
                short: '40rem',
            },
            output: 'standard',
            property: 'max-width',
        },
        text: {
            items: sizes,
            output: 'responsive',
            property: 'font-size',
        },
        weight: {
            items: {
                normal: '400',
                medium: '500',
                bold: '700',
            },
            output: 'standard',
            property: 'font-weight',
        },
        'gap-bottom': {
            items: sizes,
            output: 'responsive',
            property: 'margin-bottom',
        },
    },
};
