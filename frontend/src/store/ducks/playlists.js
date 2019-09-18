import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SUCCESS: 'playlists/GET_SUCCESS',
};

const initialState = Immutable({
  data: [],
  loading: false,
});

export default function Playlists(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return state.merge({ loading: true });
    case Types.GET_SUCCESSREQUEST:
      return state.merge({ loading: false, data: action.playload.data });
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),

  getPlaylistsSuccess: data => ({
    type: Types.GET_SUCCESS,
    playload: { data },
  }),
};
