import position from "../static/position";
import copy from "../static/copy";
import clone from "../static/clone";
import isHTMLString from "../static/isHTMLString";
import query from "../static/query";
import stylizer from "../static/stylizer";
import str2node from "../static/str2node";
import isNode from "../static/isNode";
import isString from "../static/isString";

/**
 * @property canvas
 * @property context
 * @property properties
 * @method prop
 *
 * @param canvas
 * @param properties
 * @return {DOMMatrix|{shape: function, readonly canvas: HTMLCanvasElement, computed: {properties_enabled: boolean, context: ImageBitmapRenderingContext | WebGLRenderingContext | WebGL2RenderingContext | CanvasRenderingContext2D | RenderingContext | OffscreenRenderingContext | OffscreenCanvasRenderingContext2D, matrix: boolean, properties: [], element: *}, prop(*, *=): *, readonly context: CanvasRenderingContext2D, canvasMatrix(Matrix): void, canvasTransform(*=, *=, *=, *=, *=, *=): DOMMatrix, readonly properties: []}|[]|ImageBitmapRenderingContext|WebGLRenderingContext|WebGL2RenderingContext|CanvasRenderingContext2D|RenderingContext|OffscreenRenderingContext|OffscreenCanvasRenderingContext2D|*}
 * @constructor
 */
const Paint = function (canvas, properties) {
    const root = {
        computed: {
            properties_enabled: true,
            properties: [],
            element: canvas || {},
            context: canvas ? canvas.getContext('2d') : {},
            matrix: false,
        },
        /** @return HTMLCanvasElement */
        get canvas(){
            return root.computed.element;
        },
        /** @return CanvasRenderingContext2D */
        get context() {
            return root.computed.context = root.computed.element.getContext('2d');
        },
        get properties() {
            return root.computed.properties;
        },

        /**
         *
         * @param {DOMMatrix} matrix
         */
        canvasMatrix(matrix) {
            root.computed.matrix = matrix;
        },

        /**
         *
         * @param m11
         * @param m12
         * @param m21
         * @param m22
         * @param dx
         * @param dy
         * @return {DOMMatrix}
         */
        canvasTransform(m11 = 1, m12 = 0, m21 = 0, m22 = 1, dx = 0, dy = 0) {
            const transform = new DOMMatrix([m11, m12, m21, m22, dx, dy]);
            if (root.computed.matrix instanceof DOMMatrix) {
                transform.fromMatrix(root.computed.matrix);
            }
            root.computed.context.setTransform(transform);
            return transform;
        },

        /**
         * @param dx
         * @param dy
         */
        canvasTranslate(dx = 0, dy = 0) {
            root.computed.context.setTranslate(dx, dy);
        },

        /**
         * @param callback
         */
        shape(callback) {
            callback.call(this, this.context);
            this.computed.context.setTransform();
        },
        clear() {
            this.computed.context.clearRect(0, 0, this.canvas.width || 1000, this.canvas.height || 1000);
        },

        /**
         *
         * @param key
         * @param value
         * @return {*}
         */
        prop(key, value) {
            if (value === undefined) {
                return root.computed.context[key];
            } else if (root.computed.context[key] !== undefined ) {
                return root.computed.context[key] = root.computed.properties[key] = value;
            }
        },
    };

    // accept properties
    if (properties) {
        Object.keys(properties).forEach((key) => {
            if (typeof root.computed.context[key] !== 'function') {
                root.computed.properties[key] = properties[key];
            }
        });
    }

    // apply properties
    if (root.computed.properties_enabled) {
        Object.keys(Paint.default.properties).forEach((key) => {
            root.computed.context[key] = root.computed.properties[key] !== undefined
                ? root.computed.properties[key]
                : root.computed.properties[key] = Paint.default.properties[key];
        });
    }

    // apply methods
    if (properties) {
        Object.keys(properties).forEach((key) => {
            if (typeof root.computed.context[key] === 'function') {
                const props = typeof properties[key] === 'function'
                    ? properties[key]()
                    : (Array.isArray(properties[key]) ? properties[key] : []);
                root.computed.context[key].apply(root.computed.context, props);
            }
        });
    }

    return root;
}
Paint.default = {};
Paint.default.properties = {
    direction: "ltr",
    fillStyle: "#000000",
    filter: "none",
    font: "10px sans-serif",
    globalAlpha: 1,
    globalCompositeOperation: "source-over",
    imageSmoothingEnabled: true,
    imageSmoothingQuality: "low",
    lineCap: "butt",
    lineDashOffset: 0,
    lineJoin: "miter",
    lineWidth: 1,
    miterLimit: 10,
    shadowBlur: 0,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    strokeStyle: "#000000",
    textAlign: "start",
    textBaseline: "alphabetic",
};

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
Paint.methods = {};
Paint.prop = {
    // Directionality. Possible values: ltr, rtl, inherit (default).
    direction: 'direction',

    // Color or style to use inside shapes. Default #000 (black).
    fillStyle: 'fillStyle',

    // Experimental. Applies a CSS or SVG filter to the canvas, e.g., to change its brightness or bluriness.
    filter: 'filter',

    // Font setting. Default value 10px sans-serif.
    font: 'font',

    // Alpha value that is applied to shapes and images before they are composited onto the canvas. Default 1.0 (opaque).
    globalAlpha: 'globalAlpha',
    // With globalAlpha applied this sets how shapes and images are drawn onto the existing bitmap.
    globalCompositeOperation: 'globalCompositeOperation',
    // Experimental. Image smoothing mode; if disabled, images will not be smoothed if scaled.
    imageSmoothingEnabled: 'imageSmoothingEnabled',
    // Experimental. Allows you to set the quality of image smoothing.
    imageSmoothingQuality: 'imageSmoothingQuality',

    // Type of endings on the end of lines. Possible values: butt (default), round, square.
    lineCap: 'lineCap',
    // Specifies where to start a dash array on a line.
    lineDashOffset: 'lineDashOffset',
    // Defines the type of corners where two lines meet. Possible values: round, bevel, miter (default).
    lineJoin: 'lineJoin',
    // Width of lines. Default 1.0.
    lineWidth: 'lineWidth',
    // Miter limit ratio. Default 10.
    miterLimit: 'miterLimit',

    // Specifies the blurring effect. Default: 0
    shadowBlur: 'shadowBlur',
    // Color of the shadow. Default: fully-transparent black.
    shadowColor: 'shadowColor',
    // Horizontal distance the shadow will be offset. Default: 0.
    shadowOffsetX: 'shadowOffsetX',
    // Vertical distance the shadow will be offset. Default: 0.
    shadowOffsetY: 'shadowOffsetY',

    // Color or style to use for the lines around shapes. Default #000 (black).
    strokeStyle: 'strokeStyle',

    // Text alignment setting. Possible values: start (default), end, left, right, center.
    textAlign: 'textAlign',

    // Baseline alignment setting.
    // top, hanging, middle, alphabetic (default), ideographic, bottom.
    textBaseline: 'textBaseline',

    // Experimental. Current transformation matrix (SVGMatrix object).
    currentTransform: 'currentTransform'
};


export default Paint;
