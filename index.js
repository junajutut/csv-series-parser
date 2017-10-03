function createNumberRange(min, max) {
    const arr = [];
    for(i=min; i<=max; i++) arr.push(i);
    return arr;
}

// Parse 
function parseNumberRanges(str) {
    const numbers = [];

    str.split(",").forEach(part => {
        const number = parseInt(part);
        const split = part.split('-').map(n => parseInt(n));

        if (!isNaN(part)) {

            numbers.push(number);

        } else if (split[0] && split[1]) {

            const range = createNumberRange(split[0], split[1]);
            range.forEach(n => numbers.push(n));

        } else {

            throw new Error('Invalid definition: ' + part);

        }
    });

    return numbers;
}

module.exports = {
    parseNumberRanges,
};
