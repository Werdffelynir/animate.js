import Clip from "./Clip";
import toObject from "../static/toObject";

const MoveClip = function (config) {
    const {element} = config;
    const clip = Clip(element);

    element.setAttribute('data-miveclip', config.id || 'miveclip');

    const root = {
        element: element,
        set x(value) {
            root.element.style.marginLeft = value + 'px';
            clip.x = value;
        },
        set y(value) {
            root.element.style.marginTop = value + 'px';
            clip.y = value;
        },
        set width(value) {
            root.element.style.width = value + 'px';
            clip.width = value;
        },
        set height(value) {
            root.element.style.height = value + 'px';
            clip.height = value;
        },
        get x() {
            return clip.x
        },
        get y() {
            return clip.y
        },
        get width() {
            return clip.width
        },
        get height() {
            return clip.height
        },
    };

    Object.keys(config).map(function (key) {
        root[key] = config[key]
    });

    root.clone = function (append = false) {
        const cloneProperty = toObject(root);
        cloneProperty.element = root.element.cloneNode(root);
        root.element.parentNode.appendChild(cloneProperty.element);
        return MoveClip(cloneProperty);
    };

    return root;
};

export default MoveClip;
