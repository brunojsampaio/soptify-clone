import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'playlistDetails/GET_REQUEST',
  GET_SUCCESS: 'playlistDetails/GET_SUCCESS',
};

const initialState = Immutable({
  data: {},
  loading: false,
});

export default function PlaylistDetails(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return state.merge({ loading: true });
    case Types.GET_SUCCESS:
      return state.merge({ loading: false, data: action.playload.data });
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),

  getPlaylistDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    playload: { data },
  }),
};
