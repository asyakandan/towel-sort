
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const res = [];

    if (!matrix) {
        return res;
    }

    for (let i = 0; i < matrix.length; i++) {
        let el = matrix[i].sort((a, b) => a - b);

        (i % 2) ? res.push(el.reverse()) : res.push(el);
    }

    return res.flat();
}
