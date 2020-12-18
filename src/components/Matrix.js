/**

a (m11) Horizontal scaling.
b (m12) Horizontal skewing.
c (m21) Vertical skewing.
d (m22) Vertical scaling.
e (dx) Horizontal moving.
f (dy) Vertical moving.
*/
const Matrix = function (m11, m12, m21, m22, gx, gy) {
    return {m11, m12, m21, m22, gx, gy};
};

export default Matrix;
