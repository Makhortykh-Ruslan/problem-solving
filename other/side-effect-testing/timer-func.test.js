const runWithDelay = require('./timer-func');

describe('runWithDelay', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllTimers();
  });

  test('callback is called after 3000ms', async () => {
    const cb = jest.fn();

    runWithDelay(cb);

    expect(cb).not.toHaveBeenCalled();

    jest.advanceTimersByTime(3000);

    expect(cb).toHaveBeenCalled();
  });
});
