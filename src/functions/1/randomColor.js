
/**
 * Generate a random hex color
 * @returns {string}
 */
const randomColor = function () {
    const letters = '0123456789ABCDEF'.split('');
    let i, color = '#';
    for (i = 0; i < 6; i++)
        color += letters[Math.floor(Math.random() * 16)];
    return color;
};

export default randomColor;
