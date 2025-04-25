import { logger } from './logger';

describe('test logger', () => {
  const mockStore = {
    getState: jest.fn(() => ({ some: 'state' })),
    dispatch: jest.fn(),
  };

  const next = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should log action with type', () => {
    const action = { type: 'TEST_ACTION', payload: undefined };

    console.log = jest.fn();

    logger()(next)(action);

    expect(console.log).toHaveBeenCalledWith('TEST_ACTION');
    expect(next).toHaveBeenCalledWith(action);
  });
});
