import Immutable from 'seamless-immutable';

export const Types = {
  SET: 'error/SET',
  HIDE: 'error/HIDE',
};

const initialState = Immutable({
  visible: false,
  message: null,
});

export default function error(state = initialState, action) {
  switch (action.type) {
    case Types.SET:
      return state.merge({ visible: true, message: action.playload.message });
    case Types.HIDE:
      return state.merge({ visible: false });
    default:
      return state;
  }
}

export const Creators = {
  setError: message => ({
    type: Types.SET,
    playload: { message },
  }),

  hideError: () => ({ type: Types.HIDE }),
};
