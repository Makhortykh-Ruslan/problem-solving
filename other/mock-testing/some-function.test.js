const { someFunction } = require('./some-function');
const obj = require('./custom-math-pow');

describe('pow spy', () => {
  it('counts how many times pow was called', () => {
    const spy = jest.spyOn(obj, 'customMathPow');

    someFunction(5);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(5);
    expect(spy).toHaveBeenCalledWith(6);

    spy.mockRestore();
  });
});
