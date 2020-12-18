/**
 * @deprecated
 * @param value
 * @returns {boolean|Element}
 */
const toHTML = function (value) {
    if (value) {
        const type = 'text/html';
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(value, type);

        if (xmlDoc.documentElement && xmlDoc.body.firstElementChild) {
            return xmlDoc.body.firstElementChild;
        }
        return false;
    }
    return false;
}

export default toHTML;
