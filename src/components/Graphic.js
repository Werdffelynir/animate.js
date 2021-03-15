import query from "../static/query";


/*
const graphic = Graphic({
    canvas: value,
    context: value,
    color: value,
    alpha: value,
    thickness: value,
    cap: value,
    join: value,
    font: value,
});

graphic.rectRound(110,10,100,25,5);
graphic.fill();


*/
/**
 *
 * @param params
 * @return {{formatsApply(): void, internalRectRound(*=, *=, *, *, *=): void, formats: {cap: boolean, color: string, thickness: boolean, alpha: boolean, join: boolean}, clearShadow(): this, color: (function(*): this), shadow(*, *, *, *): this, thickness: (function(*): this), line(*=, *=, *=, *=): this, save(): void, rectRound(*=, *=, *=, *=, *=): this, cap: (function(*): this), alpha: (function(*): this), context: *, ellipse(*=, *=, *, *=, *=, *=, *=, *=, *=): this, join: (function(*): this), close(): void, JOINS: {ROUND: string, BEVEL: string, MITER: string}, drawCallback: drawCallback, restore(): void, shape(*, *=): this, fill(): this, stroke(): this, circle(*, *, *=): this, begin(): void, CAPS: {SQUARE: string, ROUND: string, BUTT: string}}|*}
 * @constructor
 */
const Graphic = function (params) {
    const canvas = params['canvas']
        ? params['canvas']
        : query('canvas');

    const context = params['context']
        ? params['context']
        : (canvas ? canvas.getContext('2d') : false);

    if (!canvas || !context) {
        return {};
    }

    return {
        canvas: canvas,
        context: context,
        drawCallback: function () {},
        properties(props){
            Object.keys(props).forEach((key) => {
                if (Object.keys(Graphic.default.properties).indexOf(key) !== -1) {
                    context[key] = props[key];
                }

                if (typeof context[key] === "function") {
                    context[key].apply(context, props[key]);
                }
            });
        },
        formats: {
            color: params['color'] || '#000000',
            alpha: params['alpha'] || false,
            thickness: params['thickness'] || false,
            cap: params['cap'] || false,
            join: params['join'] || false,
            font: params['font'] || false,
        },

        color (value) {
            this.formats.color = value;
            return this;
        },

        // 0 - 1
        alpha (value) {
            this.formats.alpha = value;
            return this;
        },

        // 0 - 100
        thickness  (value) {
            this.formats.thickness = value;
            return this;
        },

        // butt, round, square
        cap (value) {
            this.formats.cap = value;
            return this;
        },

        // round, bevel, miter
        join (value) {
            this.formats.join = value;
            return this;
        },

        font (value) {
            this.formats.font = value;
            return this;
        },

        CAPS: {
            BUTT: "butt",
            ROUND: "round",
            SQUARE: "square",
        },

        JOINS: {
            BEVEL: "bevel",
            ROUND: "round",
            MITER: "miter",
        },

        // draw
        text (message, x = 0, y = 0, params = {}) {
            this.formatsApply();
            this.context.fillText(message, x, y);
        },
        formatsApply () {
            Object.keys(this.formats).forEach((key) => {
                const map = {
                    alpha: 'globalAlpha',
                    thickness: 'lineWidth',
                    cap: 'lineCap',
                    join: 'join',
                    //color: 'fillStyle',
                };
                const convertName = (key) => map[key] !== undefined ? map[key] : key;

                if (this.formats[key] !== false && Object.keys(Graphic.default.properties).includes(convertName(key))) {
                    this.context[convertName(key)] = this.formats[key];
                }
            });
        },
        begin() {this.context.beginPath()},
        close() {this.context.closePath()},
        save() {this.context.save()},
        restore() {this.context.restore()},
        shadow(x, y, blur, color) {
            this.context.shadowOffsetX = x;
            this.context.shadowOffsetY = y;
            this.context.shadowBlur = blur;
            this.context.shadowColor = color;
            return this;
        },
        clear(x = 0, y = 0, width= 1000, height = 1000) {
            this.context.clearRect(x,y,width,height);
            return this;
        },
        clearShadow() {
            this.context.shadowOffsetX =
                this.context.shadowOffsetY =
                    this.context.shadowBlur = 0;
            return this;
        },
        circle(x, y, radius) {
            this.drawCallback = function () {
                this.internalRectRound(x - (radius / 2), y - (radius / 2), radius, radius, radius / 2);
            };
            return this;
        },

        rect (x, y, width, height) {
            this.drawCallback = function () {
                this.context.beginPath();
                this.context.rect(x, y, width, height);
            };
            return this;
        },

        internalRectRound(x, y, width, height, radius) {
            this.context.beginPath();
            this.context.moveTo(x + radius, y);
            this.context.arcTo(x + width, y, x + width, y + height, radius);
            this.context.arcTo(x + width, y + height, x, y + height, radius);
            this.context.arcTo(x, y + height, x, y, radius);
            this.context.arcTo(x, y, x + width, y, radius);
        },

        rectRound (x, y, width, height, radius = 5) {
            this.drawCallback = function () {
                this.internalRectRound(x, y, width, height, radius)
            };
            return this;
        },

        shape (points, closePath) {
            this.drawCallback = function () {
                let i, temp = {}, positions = [];
                points.map(function (p) {
                    if (temp.x === undefined) {temp.x = p}
                    else if (temp.y === undefined) {temp.y = p}

                    if (temp.x !== undefined && temp.y !== undefined) {
                        positions.push(temp);temp = {}}
                });

                this.context.beginPath();
                for (i = 0; i < positions.length; i++) {
                    this.context.lineTo(positions[i].x, positions[i].y);
                }

                if (!!closePath) this.context.closePath();
            };
            return this;
        },

        line (x1, y1, x2, y2) {
            this.drawCallback = function () {
                this.context.beginPath();
                this.context.moveTo(x1, y1);
                this.context.lineTo(x2, y2);
            };
            return this;
        },

        ellipse (x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise, closePath) {
            this.drawCallback = function () {
                this.context.save();
                this.context.beginPath();
                this.context.translate(x, y);
                this.context.rotate(rotation);
                this.context.scale(radiusX / radiusY, 1);
                this.context.arc(0, 0, radiusY, startAngle, endAngle, anticlockwise ? !!anticlockwise : false);
                this.context.restore();
                if (closePath) this.context.closePath();
            };
            return this;
        },

        stroke () {
            this.formatsApply();
            this.drawCallback.call(this);

            if (this.formats.color)
                this.context.strokeStyle = this.formats.color;
            this.context.stroke();

            return this;
        },

        fill () {
            this.formatsApply();
            this.drawCallback.call(this);
            if (this.formats.color)
                this.context.fillStyle = this.formats.color;

            this.context.fill();

            return this;
        },
    }
}
Graphic.default = {};
Graphic.default.properties = {
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

export default Graphic;