
const loadTextfile = function (src, onload, onerror) {
    fetch(src)
        .then(response => response.text())
        .then(text => onload(text))
        .catch(error => typeof onerror === 'function' ? onerror(error) : null);
};

export default loadTextfile;