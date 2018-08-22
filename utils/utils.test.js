const utils = require('./utils');

it('should add two numbers', () => {
    let result = utils.add(15, 5);
});

it('should square a number', () => {
    let square = utils.square(3);

    if (square !== 9) {
        throw new Error(`Value expected was 9, but got ${square}`);
    }
});