import { handleFormChange, handleResetForm } from './formSlice';
import formReducer from './formSlice';

const initialState = {
  title: '',
  body: '',
  userId: '',
};

describe('formSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = formReducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  it('should return body state with passed payload', () => {
    const action = {
      type: handleFormChange.type,
      payload: { key: 'body', value: 'Body' },
    };
    const result = formReducer(initialState, action);

    expect(result.body).toEqual('Body');
  });

  it('should return title state with passed payload', () => {
    const action = {
      type: handleFormChange.type,
      payload: { key: 'title', value: 'Title' },
    };
    const result = formReducer(initialState, action);

    expect(result.title).toEqual('Title');
  });

  it('should return userId state with passed payload', () => {
    const action = {
      type: handleFormChange.type,
      payload: { key: 'userId', value: 2 },
    };
    const result = formReducer(initialState, action);

    expect(result.userId).toEqual(2);
  });

  it('should return initial state with reset action', () => {
    const action = { type: handleResetForm.type };

    const state = {
      title: 'Title',
      body: 'Body',
      userId: '2',
    };
    const result = formReducer(state, action);

    expect(result).toEqual(initialState);
  });
});
