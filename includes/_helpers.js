
const findRandomNum = function (max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { findRandomNum }