
const isHTMLString = function (value) {

    const div = document.createElement('div');
    div.innerHTML = value;
    return !!div.childElementCount;
};

export default isHTMLString;
