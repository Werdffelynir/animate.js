// import DOMParser from 'DOMParser';

const isHTMLString = function (value) {
    // const parser = new DOMParser();
    // const xmlDoc = parser.parseFromString(value, "text/xml");
    // return xmlDoc;

    const div = document.createElement('div');
    div.innerHTML = value;
    return !!div.childElementCount;
    
    
    
};

export default isHTMLString;
